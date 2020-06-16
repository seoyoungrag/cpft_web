insert into board(name) values('free');
insert into user (user_seq, created_at, modified_at, user_login_id, user_login_pw, user_nm) values (null, null, null, 'youngrag.seo', '{bcrypt}$2a$10$C85WGE28Oij97u8ydXJjf./J5fsTy3z77HzKwea90IlI4Pmeuiaxu', '서영락');
insert into user_roles (user_user_seq, roles) values (1, 'ROLE_USER');