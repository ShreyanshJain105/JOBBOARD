package com.jobboard.controller;

import com.jobboard.model.Job;
import com.jobboard.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    @PostMapping("/crawl")
    public String crawlJobs(@RequestParam String keyword) throws IOException {
        jobService.crawlJobs(keyword);
        return "Crawling completed!";
    }
}