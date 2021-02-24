package com.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import com.supportClass.Base_setup;

public class LoginPageObjests extends Base_setup {
	
	static By flickSignIn = By.xpath("//*[text()=' Sign In ']");
	static By userName = By.xpath("//*[@id='phoneEmail']");
	static By passWord = By.xpath("//*[@id='password']");
	static By SignInButton = By.xpath("//*[text()=' Sign In ']");
	
	public static WebElement flickSignIn() {
		return driver.findElement(flickSignIn);

	}
	public static WebElement userName() {
		return driver.findElement(userName);

	}
	public static WebElement passWord() {
		return driver.findElement(passWord);

	}
	public static WebElement SignInButton() {
		return driver.findElement(SignInButton);

	}
}
