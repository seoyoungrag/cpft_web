package kr.co.teamfresh.cpft.capi.controller.baroservice;

import java.util.ArrayList;
import java.util.List;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(subTypes = {TaxInvoiceTradeLineItem.class})
public class ArrayOfTaxInvoiceTradeLineItem {

    @ApiModelProperty(value = "taxInvoiceTradeLineItem", required = true)
    protected List<TaxInvoiceTradeLineItem> taxInvoiceTradeLineItem;
    public List<TaxInvoiceTradeLineItem> getTaxInvoiceTradeLineItem() {
        if (taxInvoiceTradeLineItem == null) {
            taxInvoiceTradeLineItem = new ArrayList<TaxInvoiceTradeLineItem>();
        }
        return this.taxInvoiceTradeLineItem;
    }
}
