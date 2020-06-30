package kr.co.teamfresh.cpft.capi.service.code;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.capi.config.dto.code.CodeCtgryDTO;
import kr.co.teamfresh.cpft.capi.entity.code.CodeCtgry;
import kr.co.teamfresh.cpft.capi.entity.common.CacheKey;
import kr.co.teamfresh.cpft.capi.repo.code.CodeCtgryJpaRepo;
import kr.co.teamfresh.cpft.capi.service.AbstractService;
import kr.co.teamfresh.cpft.capi.util.ObjectMapperUtils;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class CodeService extends AbstractService{
	private final CodeCtgryJpaRepo codeCtgryJpaRepo;

	// 모든 카테고리와 코드 조회
	@Cacheable(value = CacheKey.CODE, unless = "#result == null")
	public List<CodeCtgryDTO> findAllCodes() {
		return ObjectMapperUtils.mapAll(codeCtgryJpaRepo.findAll(), CodeCtgryDTO.class);
	}
	// 모든 카테고리와 코드 조회
	@Cacheable(value = CacheKey.CODE, unless = "#result == null")
	public List<CodeCtgry> findAllByCodesCodeUseYn() {
		return codeCtgryJpaRepo.findAllByCodesCodeUseYn('Y');
	}
}
