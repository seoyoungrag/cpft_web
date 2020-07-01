
insert into CARRIER (CARRIER_SEQ, CARRIER_NM, created_at, modified_at) values (null, '팀프레시', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values (null, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'youngrag.seo', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '서영락', 'youngrag.seo@timf.co.kr',1);
insert into user_role (user_seq, role) values (1, 'ROLE_USER');
insert into WORK_GROUP (carrier_seq, work_group_nm, work_group_manager) values (1, 'TS', '서영락');
insert into WORK_GROUP (carrier_seq, work_group_nm, work_group_manager) values (1, 'LF', '유아름');
INSERT into CODE_CTGRY values('운송그룹');
INSERT into CODE_CTGRY values('모집유형');
INSERT into CODE_CTGRY values('차종');
INSERT into CODE_CTGRY values('톤수');
INSERT into CODE_CTGRY values('완제/무제');
INSERT into CODE_CTGRY values('요일');
INSERT into CODE_CTGRY values('오더진행상태');
insert into code values('0100',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'운송그룹','운송그룹','N','운송그룹');
insert into code values('0101',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'운송그룹','TS','Y','TS');
insert into code values('0102',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'운송그룹','LF','Y','LF');
insert into code values('0200',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'모집유형','모집유형','N','모집유형');
insert into code values('0201',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'모집유형','고정','Y','고정');
insert into code values('0202',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'모집유형','지입차주','Y','지입차주');
insert into code values('0203',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'모집유형','용차','Y','용차');
insert into code values('0300',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차종','차종','N','차종');
insert into code values('0301',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차종','카고','Y','카고');
insert into code values('0302',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차종','윙바디','Y','윙바디');
insert into code values('0303',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차종','탑','Y','탑');
insert into code values('0304',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차종','냉장','Y','냉장');
insert into code values('0305',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차종','다마스','Y','다마스');
insert into code values('0306',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차종','라보','Y','라보');
insert into code values('0307',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차종','초장축','Y','초장축');
insert into code values('0308',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차종','호루','Y','호루');
insert into code values('0309',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차종','무진동','Y','무진동');
insert into code values('0310',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차종','추레라','Y','추레라');
insert into code values('0400',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'톤수','톤수','N','톤수');
insert into code values('0401',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'톤수','1t','Y','1t');
insert into code values('0402',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'톤수','1.4t','Y','1.4t');
insert into code values('0403',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'톤수','2.5t','Y','2.5t');
insert into code values('0404',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'톤수','3.5t','Y','3.5t');
insert into code values('0405',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'톤수','5t','Y','5t');
insert into code values('0406',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'톤수','8t','Y','8t');
insert into code values('0407',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'톤수','11t','Y','11t');
insert into code values('0408',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'톤수','18t','Y','18t');
insert into code values('0409',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'톤수','25t','Y','25t');
insert into code values('0500',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'완제/무제','완제/무제','N','완제/무제');
insert into code values('0501',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'완제/무제','완제','Y','완제');
insert into code values('0502',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'완제/무제','무제','Y','무제');
insert into code values('0600',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'요일','요일','N','요일');
insert into code values('0601',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'요일','월','Y','월');
insert into code values('0602',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'요일','화','Y','화');
insert into code values('0603',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'요일','수','Y','수');
insert into code values('0604',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'요일','목','Y','목');
insert into code values('0605',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'요일','금','Y','금');
insert into code values('0606',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'요일','토','Y','토');
insert into code values('0607',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'요일','일','Y','일');
insert into code values('0700',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'오더진행상태','오더진행상태','N','오더진행상태');
insert into code values('0701',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'오더진행상태','진행중','Y','진행중');
insert into code values('0702',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'오더진행상태','채용종료','Y','채용종료');
insert into code values('0703',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'오더진행상태','임시저장','Y','임시저장');
insert into code values('0704',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'오더진행상태','삭제','Y','삭제');

insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('1', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '연락. 02-1234-1234', '박스 일 40건', '서울시', '월500만원', '0501', '11', '0201', '0701', '0401', '1', '08', '02', '00', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','TS');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('1', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('1', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('1', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('1', '0601')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('1', '0602')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('1', '0603')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('1', '0604')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('1', '0605')
insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('4', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '제목1', '박스 일 40건', '서울시', '월500만원', '0501', '11', '0201', '0701', '0401', '1', '01', '07', '00', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','TS');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('4', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('4', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('4', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('4', '0601')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('4', '0602')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('4', '0603')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('4', '0604')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('$', '0605')

insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '연락주세요. 02-1234-1234', '박스 일 40건', '서울시', '월400만원', '0501', '11', '0201', '0702', '0401', '1', '16', '22', '00', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','LF');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('2', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('2', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('2', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('2', '0601')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('2', '0602')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('2', '0603')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('2', '0604')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('2', '0605')
insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('5', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '또다른 제목2', '박스 일 40건', '서울시', '월500만원', '0501', '11', '0201', '0702', '0401', '1', '07', '15', '00', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','TS');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('5', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('5', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('5', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('5', '0601')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('5', '0602')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('5', '0603')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('5', '0604')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('5', '0605')

insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('3', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '연락바랍니다. 02-1234-1234', '박스 일 40건', '서울시', '월400만원', '0501', '11', '0201', '0703', '0401', '1', '15', '23', '00', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','TS');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('3', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('3', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('3', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('3', '0601')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('3', '0602')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('3', '0603')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('3', '0604')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('3', '0605')
insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('6', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '또다른 상세내용3', '박스 일 40건', '서울시', '월500만원', '0501', '11', '0201', '0703', '0401', '1', '02', '00', '08', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','LF');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('6', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('6', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('6', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('6', '0601')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('6', '0602')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('6', '0603')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('6', '0604')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('6', '0605')
