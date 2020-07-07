package kr.co.teamfresh.cpft.carrier.web.backend.repo.code;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.carrier.web.backend.entity.code.Code;

public interface CodeJpaRepo extends JpaRepository<Code, String> {

}
