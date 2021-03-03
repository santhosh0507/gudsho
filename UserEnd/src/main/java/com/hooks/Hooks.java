package com.hooks;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.pageObjects.LoginPageObjests;
import com.supportClass.Base_setup;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base_setup {
	@Before("~@nohook")
	public void openAppAndLogin() throws IOException {
		Base_setup.intiliazedriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		LoginPageObjests.flickSignIn().click();

		try {
			LoginPageObjests.userName().sendKeys("9677225941");
			LoginPageObjests.passWord().sendKeys("pass@123");
			LoginPageObjests.SignInButton().click();

		} catch (Exception e) {
			System.out.println("502 bad gateway error");
		}
	}

	@After()
	public void tearDown(Scenario scenario) {
	    if (scenario.isFailed()) {
	            final byte[] screenshot = ((TakesScreenshot) driver)
	                        .getScreenshotAs(OutputType.BYTES);
	            scenario.embed(screenshot, "image/png"); //stick it in the report
	    }
	    driver.close();
	}
	

}
