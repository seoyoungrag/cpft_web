package kr.co.teamfresh.cpft.capi.repo.code;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.capi.entity.code.Code;
import kr.co.teamfresh.cpft.capi.entity.code.CodeCtgry;

public interface CodeCtgryJpaRepo  extends JpaRepository<CodeCtgry, String> {

	List<CodeCtgry> findAllByCodesCodeUseYn(char c);

}
