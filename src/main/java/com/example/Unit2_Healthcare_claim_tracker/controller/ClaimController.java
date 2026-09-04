package com.example.Unit2_Healthcare_claim_tracker.controller;

import com.example.Unit2_Healthcare_claim_tracker.model.Claim;
import com.example.Unit2_Healthcare_claim_tracker.repository.ClaimRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/claims")
public class ClaimController {
    private ClaimRepository claimRepository;

    public ClaimController(ClaimRepository claimRepository) {
        this.claimRepository = claimRepository;
    }

    @GetMapping
    public List<Claim> getAllClaims() {
        return claimRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Claim> getClaimById(@PathVariable Long id) {
        return claimRepository.findById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Claim> getClaimsByUserId(@PathVariable Long userId) {
        return claimRepository.findByUserId(userId);
    }

    @PostMapping
    public Claim createClaim(@RequestBody Claim claim) {

        if (claim.getStatus() == null) {
            claim.setStatus("Pending");
        }
        return claimRepository.save(claim);
    }

    @PutMapping("/{id}")
    public Claim updatedClaim(@PathVariable Long id, @RequestBody Claim updatedClaim) {
        updatedClaim.setId(id);
        return claimRepository.save(updatedClaim);
    }

    @DeleteMapping("/{id}")
    public void deleteClaim(@PathVariable Long id) {
        claimRepository.deleteById(id);
    }


    @GetMapping("/summary")
    public String getSummary() {
        List<Claim> claims = claimRepository.findAll();
        long total = claims.size();
        long pending = claims.stream().filter(claim -> "PENDING".equals(claim.getStatus())).count();
        long approved = claims.stream().filter(claim -> "APPROVED".equals(claim.getStatus())).count();
        long denied = claims.stream().filter(claim -> "DENIED".equals(claim.getStatus())).count();
        return "Total: " + total + ", Pending: " + pending + ", Approved: " + approved + ", Denied: " + denied;

    }
}
