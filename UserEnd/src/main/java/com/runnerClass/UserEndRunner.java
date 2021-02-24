package com.runnerClass;

import org.apache.log4j.PropertyConfigurator;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import com.supportClass.Base_setup;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "FeatureFiles/watchHistory.feature", 
					glue = {"com.setDefinition","com.hooks"}, 
					dryRun = false,
					plugin= {"html:reports/webReport" , "json:reports/jsonreport.json"},
					//tags = {"@paywall"},
					monochrome = true)
					

public class UserEndRunner extends Base_setup {
	
	
	@BeforeClass
	public static void logger() {
		PropertyConfigurator.configure("D:\\Automation\\UserEnd\\log4j.properties");

	}
	

}