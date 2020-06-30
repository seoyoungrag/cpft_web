package kr.co.teamfresh.cpft.capi.repo.code;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.capi.entity.code.Code;

public interface CodeJpaRepo extends JpaRepository<Code, String> {

}
