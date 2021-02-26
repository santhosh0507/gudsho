package com.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.supportClass.Base_setup;

public class SampleObjects extends Base_setup {
	
	@FindBy(xpath="//*[@id='phoneEmail']")
	public static WebElement user;

}
