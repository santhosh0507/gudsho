package com.hooks;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import com.pageObjects.LoginPageObjests;
import com.supportClass.Base_setup;

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

	     
		 }
		 catch(Exception e)
		 {
			 System.out.println("502 bad gateway error");
		 }
}
		
	@After(order=0)
	public void teardown()
	{
		driver.close();
		
	}
}
