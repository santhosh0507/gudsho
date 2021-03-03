package com.runnerClass;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import org.apache.log4j.PropertyConfigurator;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import com.supportClass.Base_setup;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.sorting.SortingMethod;

@RunWith(Cucumber.class)
@CucumberOptions(features = "FeatureFiles\\paywall.feature", 
					glue = { "com.setDefinition","com.hooks" }, 
					monochrome = true, 
					tags = { "@paywall1" }, 
					plugin = { "pretty","json:target/cucumber-reports/Cucumber.json", 
								"junit:target/cucumber-reports/Cucumber.xml",
								"html:target/cucumber-reports"})
public class UserEndRunner extends Base_setup {

	@BeforeClass
	public static void logger() {
		PropertyConfigurator.configure("log4j.properties");

	}

	@AfterClass
	public static void reports() {
		File reportOutputDirectory = new File("target/JVM");
		List<String> jsonFiles = new ArrayList<>();
		jsonFiles.add("target/cucumber-reports/Cucumber.json");
		String buildNumber = "1";
		String project = "gudsho";
		Configuration configuration = new Configuration(reportOutputDirectory, project);
		configuration.setBuildNumber(buildNumber);
		configuration.addClassifications("Environment", "QA");
		configuration.addClassifications("Browser", "Chrome");
		configuration.addClassifications("Platform", "Windows");
		configuration.setSortingMethod(SortingMethod.NATURAL);
		ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
		reportBuilder.generateReports();

	}

}