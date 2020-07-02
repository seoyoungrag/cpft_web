package kr.co.teamfresh.cpft.capi.repo;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.capi.entity.User;

public interface UserJpaRepo extends JpaRepository<User, String> {
	Optional<User> findByUserLoginId(String id);

	Optional<User> findByUserEmail(String email);
	
	User findByUserSeq(String userSeq);

	List<User> findAllByUserRolesRolePKRole(String role);
}
