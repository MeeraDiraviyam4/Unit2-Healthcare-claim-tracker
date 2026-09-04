package com.example.Unit2_Healthcare_claim_tracker.controller;

import com.example.Unit2_Healthcare_claim_tracker.model.Payment;
import com.example.Unit2_Healthcare_claim_tracker.repository.PaymentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PaymentRepository paymentRepository;    // dependency injection of PaymentRepository

    public PaymentController(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @GetMapping("/claim/{claimId}")
    public Optional<Payment> getPaymentsByClaimId(@PathVariable Long claimId) {
        return paymentRepository.findByClaimId(claimId);
    }
    @PostMapping
    public Payment createPayment(@RequestBody Payment payment) {
        if (payment.getPaymentStatus() == null) {
            payment.setPaymentStatus("PENDING");
        }
        return paymentRepository.save(payment);
}

    @PutMapping("/{id}")
    public Payment updatePayment(@PathVariable Long id, @RequestBody Payment updatedPayment) {
        updatedPayment.setId(id);
        return paymentRepository.save(updatedPayment);
    }
}
