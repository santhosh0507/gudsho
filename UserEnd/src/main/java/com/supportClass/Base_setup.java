package com.supportClass;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Base_setup {

	static public WebDriver driver;
	public static Logger log = Logger.getLogger(Base_setup.class.getName());

	public static WebDriver intiliazedriver() throws IOException {
		Properties prop = new Properties();
		// FileInputStream fis=new
		// FileInputStream(System.getProperty("user.dir")+"/src/main/java/Resource/baseproperties.properties");
		FileInputStream fis = new FileInputStream("baseproperties.properties");
		prop.load(fis);
		String browsername = prop.getProperty("browser");
		String url = prop.getProperty("baseurl");
		if (browsername.contains("chrome")) {
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\chromedriver.exe");
			ChromeOptions options = new ChromeOptions();
			if (browsername.contains("headless")) {
				options.addArguments("headless");
				options.addArguments("window-size=1400,600");
			}
			options.addArguments("--disable-notifications");
			driver = new ChromeDriver(options);

		} else if (browsername == "firefox") {
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\chromedriver.exe");
			driver = new FirefoxDriver();
		} else if (browsername == "internetexplorer") {
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\chromedriver.exe");
			driver = new InternetExplorerDriver();
		}
		driver.manage().window().maximize();
		log.info("driver initialized and maximized");
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(url);
		log.info("entering in to " + url);
		return driver;

	}

}