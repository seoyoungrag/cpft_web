package kr.co.teamfresh.cpft.capi.service.code;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.capi.entity.code.CodeCtgry;
import kr.co.teamfresh.cpft.capi.entity.common.CacheKey;
import kr.co.teamfresh.cpft.capi.repo.code.CodeCtgryJpaRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class CodeService {
	private final CodeCtgryJpaRepo codeCtgryJpaRepo;

	// 모든 카테고리와 코드 조회
	@Cacheable(value = CacheKey.CODE, unless = "#result == null")
	public List<CodeCtgry> findAll() {
		return codeCtgryJpaRepo.findAll();
	}
	// 모든 카테고리와 코드 조회
	@Cacheable(value = CacheKey.CODE, unless = "#result == null")
	public List<CodeCtgry> findAllByCodesCodeUseYn() {
		return codeCtgryJpaRepo.findAllByCodesCodeUseYn('Y');
	}
}
