package kr.co.teamfresh.cpft.capi.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.capi.entity.User;

public interface UserJpaRepo extends JpaRepository<User, Long> {
	Optional<User> findByUserLoginId(String id);
}
