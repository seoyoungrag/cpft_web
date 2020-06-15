import React from "react";
import Awesomplete from "Awesomplete";
class Autocomplete extends React.Component {
 constructor(props) {
  super(props);
  // use lodash lib
  this.uniq = new Date().getTime();
  this.state = {
   loading: false,
   label: this.getOption("defaultValue"),
   dataList: this.handleList(this.getOption("values")),
  };
 }

 // on component loading
 componentDidMount() {
  // send value to the parent form and adapt depending on data type
  if (this.getOption("values")) {
   //init the autocomplete
   this.initAwesomplete();
  } else {
   //the data and init autocomplete via CallBack
   this.initDataFetch((data) => {
    this.setState({
     dataList: this.getOption("remoteAjaxHandler")(
      data,
      this.getOption("remoteValue"),
      this.getOption("remoteLabel")
     ),
    });
    //init the autocomplete
    this.initAwesomplete();
    // getLabelFromValue helps us to manage Values and display Labels
    this.setState({
     label: this.getLabelFromValue(this.getOption("defaultValue")),
    });

    //disable loading
    this.setState({ loading: false });
   });
  }
  // getLabelFromValue helps us to manage Values and display Labels
  this.setState({
   label: this.getLabelFromValue(this.getOption("defaultValue")),
  });
 }

 // format the array into an acceptable form for awesomplete
 handleList(list) {
  if (!list) {
   return list;
  }
  const _list = [];
  list.forEach((item, key) => {
   _list.push({ label: item, value: key });
  });
  return _list;
 }

 // Init awesomplete
 initAwesomplete() {
  var input = document.getElementById(this.props.id + this.uniq);
  //use Awesomplete lib
  const i = new Awesomplete(input, {
   list: this.state.dataList,
   replace: this.onReplace(input),
   autoFirst: this.getOption("autoFirst"),
  });
 }

 // anytime the awesomplete replace, the state and parent form data change
 onReplace(input) {
  return ((item) => {
   // use the Form parent function
   this.props.onChange(item.value);
   this.setState({ label: item.label });
  }).bind(this);
 }

 // on input change function
 onChange(event) {
  // Anytime the input change, the State change
  // Anytime the state change, the component will be rendered with the new label
  this.setState({
   label: event.target.value,
  });
 }

 // get default options based on props
 getDefaultOptions() {
  const props = this.props;
  return {
   // when popup open, first item is selected
   autoFirst: props["autoFirst"] ? props["autoFirst"] : false,
   // value to display on first init
   defaultValue: props["defaultValue"] ? props["defaultValue"] : null,
   // values to display in the popup
   values: props["values"] ? props["values"] : null,
   // minimum character before popup open
   minChar: props["minChar"] ? props["minChar"] : 2,
   // url : remote url where to access data
   remoteUrl: props["remoteUrl"] ? props["remoteUrl"] : null,
   // value: from the fetched data, the value will be send to the server
   remoteValue: props["remoteValue"] ? props["remoteValue"] : null,
   // label: from the fetched data, the data you want to display in popup
   remoteLabel: props["remoteLabel"] ? props["remoteLabel"] : null,
   // ajaxHandler: on reception of the remote, convert the Json into
   // [{"label": label, "value": value}, {...}] acceptable by awesomplete
   remoteAjaxHandler: props["remoteAjaxHandler"]
    ? props["remoteAjaxHandler"]
    : this.ajaxHandler,
  };
 }

 // get option with name
 getOption(optionName) {
  return this.options[optionName];
 }

 // get all options
 get options() {
  if (!this._options) {
   this._options = this.getDefaultOptions();
  }
  return this._options;
 }

 // handle the ajax response, transform the array for awesomplete
 ajaxHandler(values, valueFieldname, labelFieldname) {
  // use lodash lib
  if (Array.isArray(values)) {
   var newValues = [];
   const value = valueFieldname;
   const label = labelFieldname;
   values.map((item) => {
    newValues.push({ label: item[label], value: item[value] });
   });
   values = newValues;
  }

  return values;
 }

 // fetch the data and callback a function on success
 initDataFetch(cb) {
  // run loading
  this.setState({ loading: true });
  fetch(this.getOption("remoteUrl"))
   // parse
   .then((res) => {
    return res.json();
   })
   // cb
   .then(cb);
 }

 // from the dataList, get the label with the value
 getLabelFromValue(value) {
  if (!this.state.dataList) {
   return null;
  }
  var item = this.state.dataList
   .filter((item, key) => {
    return item.value == value;
   })
   .shift();
  // if nothing is found, return null
  return !item.label ? null : item.label;
 }

 render() {
  return (
   <input
    type="text"
    className={this.props.className}
    value={this.state.label}
    className="form-control"
    id={this.props.id + this.uniq}
    key={this.props.key_inputed}
    placeholder={this.props.placeholder}
    onChange={this.onChange.bind(this)}
   />
  );
 }
}

export default Autocomplete;
