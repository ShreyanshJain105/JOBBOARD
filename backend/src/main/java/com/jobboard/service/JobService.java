package com.jobboard.service;

import com.jobboard.model.Job;
import com.jobboard.repository.JobRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public void crawlJobs(String keyword) throws IOException {
        String url = "https://www.naukri.com/" + keyword + "-jobs";
        Document doc = Jsoup.connect(url).get();
        Elements jobElements = doc.select(".jobTuple");

        for (Element jobElement : jobElements) {
            String title = jobElement.select(".title").text();
            String company = jobElement.select(".companyName").text();
            String location = jobElement.select(".location").text();
            String experience = jobElement.select(".experience").text();
            String applicationLink = jobElement.select("a").attr("href");

            Job job = new Job();
            job.setTitle(title);
            job.setCompany(company);
            job.setLocation(location);
            job.setExperience(experience);
            job.setApplicationLink(applicationLink);

            jobRepository.save(job);
        }
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }
}