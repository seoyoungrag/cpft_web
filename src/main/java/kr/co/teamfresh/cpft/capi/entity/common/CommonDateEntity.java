package kr.co.teamfresh.cpft.capi.entity.common;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class CommonDateEntity { // 날짜 필드 상속 처리
	@CreatedDate // Entity 생성시 자동으로 날짜세팅
	@Column(name="CREATED_AT")
	private LocalDateTime createdAt;
	@LastModifiedDate // Entity 수정시 자동으로 날짜세팅
	@Column(name="MODIFIED_AT")
	private LocalDateTime modifiedAt;
}