package com.example.Unit2_Healthcare_claim_tracker.repository;

import com.example.Unit2_Healthcare_claim_tracker.model.Claim;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClaimRepository extends JpaRepository<Claim, Long> {
    List<Claim> findByUserId(Long userId);
}
