package kr.co.teamfresh.cpft.carrier.web.backend.repo.board;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.carrier.web.backend.entity.board.Board;

public interface BoardJpaRepo extends JpaRepository<Board, Long> {
	Board findByName(String name);
}