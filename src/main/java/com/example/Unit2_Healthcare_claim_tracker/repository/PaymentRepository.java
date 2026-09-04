package com.example.Unit2_Healthcare_claim_tracker.repository;

import com.example.Unit2_Healthcare_claim_tracker.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    Optional<Payment> findByClaimId(Long claimId);
}
