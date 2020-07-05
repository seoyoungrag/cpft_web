
INSERT into CODE_CTGRY values('운송그룹');
INSERT into CODE_CTGRY values('모집유형');
INSERT into CODE_CTGRY values('차종');
INSERT into CODE_CTGRY values('톤수');
INSERT into CODE_CTGRY values('완제/무제');
INSERT into CODE_CTGRY values('요일');
INSERT into CODE_CTGRY values('오더진행상태');
INSERT into CODE_CTGRY values('차주지원상태');
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
insert into code values('0800',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차주지원상태','차주지원상태','N','차주지원상태');
insert into code values('0801',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차주지원상태','연락중','Y','연락중');
insert into code values('0802',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차주지원상태','채용확정','Y','채용확정');
insert into code values('0803',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'차주지원상태','채용거절','Y','채용거절');

insert into CARRIER (CARRIER_SEQ, CARRIER_NM, created_at, modified_at) values ('1', '팀프레시', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('1', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'youngrag.seo', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '서영락', 'youngrag.seo@timf.co.kr',1);
insert into user_role (user_seq, role) values ('1', 'ROLE_USER');
insert into user_role (user_seq, role) values ('1', 'ROLE_CARRIER');
insert into WORK_GROUP (carrier_seq, work_group_nm, work_group_manager) values ('1', 'TS', '서영락');
insert into WORK_GROUP (carrier_seq, work_group_nm, work_group_manager) values ('1', 'LF', '유아름');

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'ahreum.yu', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '유아름', 'ahreum.yu@timf.co.kr',null);
insert into user_role (user_seq, role) values ('2', 'ROLE_USER');
insert into user_role (user_seq, role) values ('2', 'ROLE_TRUCKOWNER');
insert into TRUCK_OWNER ("USER_SEQ", "AGE", "CARRER_CN", "CARRER_DETAIL") values('2', 30, '1년 미만','1년 미만');
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('2', '0302' ,'0407', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('3', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'carowner1', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '황차주', 'carowner1@timf.co.kr',null);
insert into user_role (user_seq, role) values ('3', 'ROLE_USER');
insert into user_role (user_seq, role) values ('3', 'ROLE_TRUCKOWNER');
insert into TRUCK_OWNER ("USER_SEQ", "AGE", "CARRER_CN", "CARRER_DETAIL") values('3', 31, '2년','2년');
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('3', '0304' ,'0403', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('3', '0302' ,'0405', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('4', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'carowner2', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '엄차주', 'carowner2@timf.co.kr',null);
insert into user_role (user_seq, role) values ('4', 'ROLE_USER');
insert into user_role (user_seq, role) values ('4', 'ROLE_TRUCKOWNER');
insert into TRUCK_OWNER ("USER_SEQ", "AGE", "CARRER_CN", "CARRER_DETAIL") values('4', 32, '3년','3년');
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('4', '0305' ,'0402', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('5', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'carowner3', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '양차주', 'carowner3@timf.co.kr',null);
insert into user_role (user_seq, role) values ('5', 'ROLE_USER');
insert into user_role (user_seq, role) values ('5', 'ROLE_TRUCKOWNER');
insert into TRUCK_OWNER ("USER_SEQ", "AGE", "CARRER_CN", "CARRER_DETAIL") values('5', 33, '4년','4년');
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('5', '0306' ,'0403', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('5', '0304' ,'0406', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('6', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'carowner4', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '서차주', 'carowner4@timf.co.kr',null);
insert into user_role (user_seq, role) values ('6', 'ROLE_USER');
insert into user_role (user_seq, role) values ('6', 'ROLE_TRUCKOWNER');
insert into TRUCK_OWNER ("USER_SEQ", "AGE", "CARRER_CN", "CARRER_DETAIL") values('6', 34, '5년','5년');
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('6', '0306' ,'0403', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('7', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'carowner5', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '최차주', 'carowner5@timf.co.kr',null);
insert into user_role (user_seq, role) values ('7', 'ROLE_USER');
insert into user_role (user_seq, role) values ('7', 'ROLE_TRUCKOWNER');
insert into TRUCK_OWNER ("USER_SEQ", "AGE", "CARRER_CN", "CARRER_DETAIL") values('7', 35, '6년','6년');
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('7', '0305' ,'0404', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('7', '0310' ,'0409', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('7', '0309' ,'0409', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('8', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'carowner6', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '신채주', 'carowner6@timf.co.kr',null);
insert into user_role (user_seq, role) values ('8', 'ROLE_USER');
insert into user_role (user_seq, role) values ('8', 'ROLE_TRUCKOWNER');
insert into TRUCK_OWNER ("USER_SEQ", "AGE", "CARRER_CN", "CARRER_DETAIL") values('8', 36,  '1년','1년');
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('8', '0308' ,'0408', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('9', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'carowner7', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '임차주', 'carowner7@timf.co.kr',null);
insert into user_role (user_seq, role) values ('9', 'ROLE_USER');
insert into user_role (user_seq, role) values ('9', 'ROLE_TRUCKOWNER');
insert into TRUCK_OWNER ("USER_SEQ", "AGE", "CARRER_CN", "CARRER_DETAIL") values('9', 37, '2년','2년');
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('9', '0307' ,'0407', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('10', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'carowner8', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '이차주', 'carowner8@timf.co.kr',null);
insert into user_role (user_seq, role) values ('10', 'ROLE_USER');
insert into user_role (user_seq, role) values ('10', 'ROLE_TRUCKOWNER');
insert into TRUCK_OWNER ("USER_SEQ", "AGE", "CARRER_CN", "CARRER_DETAIL") values('10', 36,  '3년','3년');
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('10', '0306' ,'0406', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('11', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'carowner9', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '홍차주', 'carowner9@timf.co.kr',null);
insert into user_role (user_seq, role) values ('11', 'ROLE_USER');
insert into user_role (user_seq, role) values ('11', 'ROLE_TRUCKOWNER');
insert into TRUCK_OWNER ("USER_SEQ", "AGE", "CARRER_CN", "CARRER_DETAIL") values('11', 35,  '6년','6년');
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('11', '0305' ,'0405', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm,user_email, carrier_seq) values ('12', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'timflabs', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '팀프랩스', 'develop@timf.co.kr',null);
insert into user_role (user_seq, role) values ('12', 'ROLE_USER');
insert into user_role (user_seq, role) values ('12', 'ROLE_TRUCKOWNER');
insert into TRUCK_OWNER ("USER_SEQ", "AGE", "CARRER_CN", "CARRER_DETAIL") values('12', 34, '5년','5년');
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('12', '0301' ,'0401', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('12', '0302' ,'0402', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('12', '0303' ,'0403', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into TRUCK_OWNER_TRUCK (USER_SEQ, CAR_TYPE, TON_TYPE, CREATED_AT, MODIFIED_AT) values ('12', '0304' ,'0404', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('1', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '연락. 02-1234-1234', '박스 일 40건', '서울시', '월500만원', '0501', '11', '0201', '0701', '0401', '1', '08', '02', '00', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','TS');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('1', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('1', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('1', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('1', '0601')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('1', '0602')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('1', '0603')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('1', '0604')
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('1', '0605')
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values ('1', '2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '처음이지만 성실함으로 열심히 하겠습니다.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (1, 12, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '5년 경력의 냉장 차주.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (1, 3, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안전, 정확한 배송 책임집니다.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (1, 4, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요1.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (1, 8, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요5.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (1, 9, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요6.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (1, 10, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요7.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (1, 11, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요8.', '0802');

insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('4', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '제목1', '박스 일 40건', '서울시', '월500만원', '0501', '11', '0201', '0701', '0401', '1', '01', '07', '00', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','TS');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('4', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('4', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('4', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('4', '0601');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('4', '0602');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('4', '0603');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('4', '0604');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('4', '0605');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (4, '2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '처음이지만 성실함으로 열심히 하겠습니다.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (4, 5, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요2.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (4, 6, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요3.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (4, 7, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요4.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (4, 8, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요5.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (4, 10, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요7.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (4, 11, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요8.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (4, 12, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요9.', '0803');

insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '연락주세요. 02-1234-1234', '박스 일 40건', '서울시', '월400만원', '0501', '11', '0201', '0702', '0401', '1', '16', '22', '00', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','LF');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('2', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('2', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('2', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('2', '0601');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('2', '0602');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('2', '0603');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('2', '0604');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('2', '0605');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (2, '2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '처음이지만 성실함으로 열심히 하겠습니다.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (2, 3, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안전, 정확한 배송 책임집니다.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (2, 5, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요2.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (2, 6, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요3.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (2, 7, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요4.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (2, 9, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요6.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (2, 10, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요7.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (2, 11, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요8.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (2, 12, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요9.', '0803');

insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('5', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '또다른 제목2', '박스 일 40건', '서울시', '월500만원', '0501', '11', '0201', '0702', '0401', '1', '07', '15', '00', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','TS');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('5', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('5', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('5', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('5', '0601');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('5', '0602');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('5', '0603');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('5', '0604');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('5', '0605');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (5, '2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '처음이지만 성실함으로 열심히 하겠습니다.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (5, 10, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '5년 경력의 냉장 차주.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (5, 4, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요1.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (5, 6, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요3.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (5, 7, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요4.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (5, 8, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요5.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (5, 9, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요6.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (5, 12, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요9.', '0803');

insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('3', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '연락바랍니다. 02-1234-1234', '박스 일 40건', '서울시', '월400만원', '0501', '11', '0201', '0703', '0401', '1', '15', '23', '00', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','TS');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('3', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('3', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('3', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('3', '0601');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('3', '0602');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('3', '0603');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('3', '0604');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('3', '0605');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (3, '2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '처음이지만 성실함으로 열심히 하겠습니다.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (3, 11, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '5년 경력의 냉장 차주.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (3, 3, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안전, 정확한 배송 책임집니다.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (3, 5, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요2.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (3, 6, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요3.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (3, 7, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요4.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (3, 9, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요6.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (3, 10, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요7.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (3, 12, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요9.', '0803');

insert into "ORDER" ("ORDER_SEQ", "CREATED_AT", "MODIFIED_AT", "DETAIL_MATTER", "DLVY_PRDLST", "OPRAT_SCTN", "PAY_AMT", "PAY_FULL_TYPE", "RCRIT_MANS", "RCRIT_TYPE", "STATUS", "TON_TYPE", "USER_SEQ", "WORK_HOUR_END", "WORK_HOUR_START", "WORK_MINUTE_END", "WORK_MINUTE_START", "WORKING_AREA", "WORKING_DAYS_TYPE", "CARRIER_SEQ", "WORK_GROUP_NM") values ('6', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), '또다른 상세내용3', '박스 일 40건', '서울시', '월500만원', '0501', '11', '0201', '0703', '0401', '1', '02', '00', '08', '00', '경기 이천시 마장면 덕이로 2', 'fiveDay','1','LF');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('6', '0306');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('6', '0307');
insert into "ORDER_CAR_TYPE" ("ORDER_SEQ", "CAR_TYPE") values ('6', '0308');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('6', '0601');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('6', '0602');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('6', '0603');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('6', '0604');
insert into "ORDER_WORK_DAY" ("ORDER_SEQ", "WORK_DAY") values ('6', '0605');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (6, '2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '5년 경력의 냉장 차주.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (6, 4, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요1.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (6, 5, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요2.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (6, 6, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요3.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (6, 8, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요5.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (6, 9, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요6.', '0803');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (6, 10, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요7.', '0801');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (6, 11, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'N', '안녕하세요8.', '0802');
insert into "ORDER_TRUCK_OWNER" ("ORDER_SEQ", "USER_SEQ", "CREATED_AT", "MODIFIED_AT", "IS_READ", "MESSAGE", "STATUS") values (6, 12, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), 'Y', '안녕하세요9.', '0803');
