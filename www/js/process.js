/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';*/




	var second = (
		<div>
		
			<div className = "page" data-page="">
				<div className = "page-content">
				
					<div className= "navbar" ><div className = "item-title">Javascript Tutorial</div>
					<div className = "navbar-inner" id = "swipe_left">
						<div className = "left" onclick={lebron}>
							<a className = "link" href = "#" onClick={lebron} data-panel = "left" id = "swipe_left">
								<i className = "icon-bars icon"></i>
							</a>
						</div>
					</div>
				</div>
					<div className = "content-block-title"></div>
						<div className = "content-block"></div>
							<div className = "list-block">
							<div className = "home-modal">
								<ul>
									<li>
										<a className = "item-link" href = "#" onClick={where_to} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Where To</div>
													
													
												</div>
											</div>
										</a>
									</li>
								<li>
									<a className = "item-link" href = "#" onClick={functions} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Functions and Events</div>
												</div>		
											</div>
									</a>	
								</li>
								
								<li>
									<a className = "item-link" href = "#" onClick = {whitespace} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Whitespace</div>
												</div>		
											</div>
									</a>	
								</li>
								
								<li>
									<a className = "item-link" href = "#"  onClick = {external} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">External Javascript</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={head} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript in Head or Body</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={external} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">External JavaScript</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={output} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Output</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={syntax} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Syntax</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={statements} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Statements</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={variables} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Variables</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={comments} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Comments</div>
												</div>		
											</div>
									</a>	
								</li>
									<li>
									<a className = "item-link" href = "#" onClick={data} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Data Types</div>
												</div>		
											</div>
									</a>	
								</li>
									<li>
									<a className = "item-link" href = "#" onClick={func} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Functions</div>
												</div>		
											</div>
									</a>	
								</li>

								</ul>
							</div>	
							</div>
						</div>
					</div>
					<div id = "slide"></div>
			
				</div>
			
		);
		
	
		ReactDOM.render(second,document.getElementById('root'));
	
		
	

	
	function where_to() {
	
		
	var where = (
	<div>
	<div className= "navbar" >
	<div className = "navbar-inner" id = "swipe_left">
		<div className = "left"onClick={myHome}>
			<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
				<i className = "icon-back icon"></i>
			</a>
		</div>
	</div>
	</div>
	<p><h3>Javascript Where To</h3></p>
	<p>In HTML,JavaScript code must be inserted between script tags.</p>
	<p>You can place any number of scripts in an HTML documents.</p>
	<p>Scripts can be placed in the body or in the head section of an HTML page,or in both.</p>
	</div>
	);
	ReactDOM.render(where,document.getElementById('root'));
	}

	function functions (){
		var events = (
		<div>
		<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
		<p><h3>Javascript Functions and Events</h3></p>
		<p>A Javascript function is a block of Javascript code,that can be executed when asked for.</p>
		<p>For example, a function can be executed when an event occurs,</p>
		<p>likes when the user clicks the button.</p>
		</div>
		);
	ReactDOM.render(events,document.getElementById('root'));
	}

	function head (){
		var Head = (
		<div>
		<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
		<p><h3>Javascript in head or body</h3></p>
		<p>You can place any number of scripts in an HTML document.</p>
		<p>Scripts can be placed in the body, or in the head section of an HTML page, or in both.</p>
		</div>
	 );
	 ReactDOM.render(Head,document.getElementById('root'));
	}

	function external (){
		var External = (
		<div>
		<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
		<p><h3>External Javascript</h3></p>
		<p>Scripts can also be placed in external files.</p>
		<p>External scripts are practical when the same code is used in many different web pages.</p>
		<p>Javascript files have the file extension .js.</p>
		<p>To use an external script, put the name of the script file in the src(source)attribute of the script tag:</p>
		<p>"External Javascript Advantages"</p>
		<p>It separates HTML and code</p>
		<p>It makes HTML and Javascript easier to read and maintain</p>
		<p>Cached Javascript files can speed up page loads.</p>
		</div>
	);
	ReactDOM.render(External,document.getElementById('root'));
	}

	function output(){
		var Output =(
		<div>	
		<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
		<p><h3>Javascript Output</h3></p>
		<p>"Javascript Display Possibilities"</p>
		<p>Javascript can "display" data in different ways:</p>
		<p>Writing into an alert box, using window.alert().</p>
		<p>Writing into the HTML element, using innerHTML.</p>
		<p>Writing into the browser console,using console.log().</p></div>
	);
	ReactDOM.render(Output,document.getElementById('root'));
	}

	function syntax(){
		var Syntax =(
		<div>
		<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
		<div className = "home-modal">
		<p><h3>Javascript Syntax</h3></p>
		<p>A computer program is a list of instructions to be executed by the computer.</p>
		<p>In a programming language, these program instructions are called statements.</p>
		<p>Javascript is a programming language.</p>
		<p>Javascript statements are separated by semicolons.</p>
		<p>var x = 5;</p>
		<p>var y = 6;</p>
		<p>var z = x + y;</p>
		<p>"Javascript Keywords"</p>
		<p>Javascript keywords are used to identify actions to be performed.</p>
		<p>The var keyword tells the browser to create a nes varible:</p>
		<p>var x = 5 + 6;</p>
	<p>var y =x * 10;</p>
	<p>"Javascript Comments"</p>
	<p>Not all Javascript statements are executed.</p>
	<p>Code after double slashes  or between /* and */ is treated as a comment.</p>
	<p>Comments are ignored, and will not be executed.</p>
	<p>var x = 5;  I will be executed</p>
	<p>/var x = 5; I will not be executed</p>
	<p>"Javascript Identifiers"</p>
	<p>Identifiers are name</p>
	<p>In Javascript, identifiers are used to name variables (and keywords, and functions, and labels).</p>
	<p>The rules for legal names are much the same in most programming languages.</p>
	<p>In Javascript, the first character must be a letter, an underscore(_) or a dollar sign($).</p>
	<p>Subsequent characters may be letters, digits, underscore or dollar signs.</p>
	<p>"Javascript is case sensitive"</p>
	<p>The variables lastname and lastName, are two different variables.</p>
	<p>lastname = "Carolino";</p>
	<p>lastName = "Dominic";</p></div>
	</div>
	);
	ReactDOM.render(Syntax,document.getElementById('root'));
	}

	function statements (){
		var Statements=(
	<div>
	<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
		<div className = "home-modal">
	<p> <h3>Javascript Statements</h3></p>
	<p>This statements tells the browser to  write "Hello Dolly". inside an HTML element with id = "demo":</p>
	<p>document.getElementById("demo").innerHTML = "Hello Dolly";</p>
	<p>"Javascript Programs</p>
	<p>Most javascript progrms contain many statements.</p>
	<p>The statements are executed, one by one, in the same order as they are written.</p>
	<p>In this example, x, y, and z is given values, and finally z is displayed:</p>
	<p>var x = 5;</p>
	<p>var y = 6;</p>
	<p>var z = x + y;</p>
	<p>document.getElementById("demo").innerHTML = z;</p>
	<p>"Semicolons"</p>
	<p>Semicolons separate Javascript statements.</p>
	<p>Add a semicolon at the end of each executable statement:</p>
	<p>a = 5;</p>
	<p>b = 6;</p>
	<p>c = a+b;</p></div>
	</div>
	);
	ReactDOM.render(Statements,document.getElementById('root'));
	}

	function whitespace (){
	var Whitespace =(
		<div>
		<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
		<div className = "home-modal">
		<p><h3>Javascript White Space</h3></p>
	<p>Javascript ignores multiple spaces. You can add white space to your script to make it more readable.</p>
	<p>The following lines are equivalent:</p>
	<p>var person = "Dominic";</p>
	<p>var person = "Dominic";</p>
	<p>"Javascript Line Length and Line Breaks"</p>
	<p>For best readability, programmers often like to avoid code lines longer than 80 characters.</p>
	<p>If a Javascript statements does not fit on one line, the best place to break it, is after an operator:</p>
	<p>"Javascript Code Blocks"</p>
	<p>Javascript statements can be grouped together in code blocks, inside curly brackets</p>
	<p>The purpose of code blocks is to define statements to be executed together.</p>
	<p>One place you will find statements grouped together in blocks, are in Javascript functions:</p>
	<p>function myFunction()</p>
	<p>document.getElementById("demo") = "Hello Dolly".";</p>
	<p>document.getElementById("myDIV").innerHTML = "How are you?;</p>
	<p>}</p>
	<p>"Javascript Keywords"</p>
	<p>Javascript statements often start with a keyword to identify the Javascript action to be performed.</p></div>
	</div>
	 );
	 ReactDOM.render(Whitespace,document.getElementById('root'));
	}

	function comments (){
		var Comments = (
	<div>	
	<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
	<p><h3>Javascript Comments</h3></p>
	<p>Single line comments start with //.</p>
	<p>Any text between / and the end of the line, will be ignored by Javascript (will not be executed).</p>
	<p>/Change heading;</p>
	<p>document.getElementById("myH").innerHTML = "My First Page";</p>
	<p>"Multi-line Comments"</p>
	<p>Multi-line comments start with /* and end with */.</p>
	<p>Any text between /*and */ will be ignored by Javascript.</p>
	<p></p>
	<p>The code below will change the heading with id = "myH" and the paragraph with id = "myP" in my web page:</p>
	<p>*/</p>
	<p>document.getElementById("myH").innerHTML = "My First Page";</p>
	<p>document.getElementById("myP").innerHTML = "My First Paragraph";</p></div>
	);
	ReactDOM.render(Comments,document.getElementById('root'));
	}

	function variables(){
		var Variables =(
	<div>
	<div className = "home-modal">
	<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
	<p><h3>Javascript Variables</h3></p>
	<p>"Javascript Operators"</p>
	<p>var x = 5; /assign the value 5 to x</p>
	<p>var y = 2; / assign the value 2 to y</p>
	<p>var z = x+y;/ assign the value 7 to z(x+y)</p>
	<p>"Javascript Arithmetic Operators"</p>
	<p>+-Addition</p>
	<p>--Subtraction</p>
	<p>*-Multiplication</p>
	<p>/-Division</p>
	<p>%-Modulus</p>
	<p>++-Increment</p>
	<p>--_Decrement</p>
	<p>"Javascript String Operators"</p>
	<p>The + operator can also be used to add (concatenate) strings.</p>
	<p>txt1 = "Dominic";</p>
	<p>txt2 = "Carolino";</p>
	<p>txt3 = txt1 + txt2;</p>
	<p>The result of txt3 will be:</p>
	<p>Dominic Carolino</p>
	<p>"Adding String and Numbers"</p>
	<p>x = 5+5;</p>
	<p>y = "5" + 5;</p>
	<p>z = "Hello" + 5;</p>
	<p>The result of x,y and z will be:</p>
	<p>10</p>
	<p>55</p>
	<p>Hello5</p>
	<p>"Javascript Comparison and Logical Operators"</p>
	<p>==equal to</p>
	<p>===equal value and equal type</p>
	<p>!=not equal</p>
	<p>!==not equal value or not equal type</p>
	<p>>greater than</p>
	<p>less than</p>
	<p>greater than or equal to</p>
	<p>less than or equal to</p>
	<p>?ternary operator</p></div>
	</div>
	);
		ReactDOM.render(Variables,document.getElementById('root'));
	}

	function assignments (){
		var Assignments = (
	<div>
	<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
	<p><h3> Javascript Assignments</h3></p>
	<p>"Javascript Assignment Operators"</p>
	<p>Assignment operators assign values to Javascript variables</p>
	<p>The = assignment operator assigns a value to a variable.</p>
	<p>Assignment</p>
	<p>var = 10;</p>
	<p>The += assignment operator adds a value to a variable.</p>
	<p>Assignment</p>
	<p>var x = 10;</p>
	<p>x+=5;</p>
	<p>The -= assignment operator subtracts a value from a variable.</p>
	<p>var x = 10;</p>
	<p>x-=5;</p></div>
	);
	ReactDOM.render(Assignments,document.getElementById('root'));
	}

	function data (){
		var Data =(
	<div>
	<div className = "home-modal">
	<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
	<p><h3>Javascript Data Types</h3></p>
	<p>"Data Types" </p>
	<p>Javascript variables can hold many data types: numbers, strings,arrays,objects and more:</p>
	<p>var length = 16; /Numbers</p>
	<p>var lastName = "Carolino"; /String</p>
	<p>var cars = ["Honda", "Toyota", "Mitsubishi"];/ Array</p>
	<p>var x = firstName:"Dominic", lastName:"Carolino"; Object</p>
	<p>"Javascript Strings"</p>
	<p>A string (or a text string) is a series of characters like "Dominic".</p>
	<p>Strings are written with quotes. You can use single or double quotes:</p>
	<p>var answer = "Its alright";/Single</p>
	<p>quote inside double quotes</p>
	<p>var answer = "He is called "Dominic";//Double quotes inside double quotes</p>
	<p>"Javascript Numbers"</p>
	<p>Javascript has only one type of numbers.</p>
	<p>Numbers can be written with or w/o decimals:</p>
	<p>varx1 = 34.00; /Written with decimals</p>
	<p>varx2 == 34.00;/ Written w/o decimals</p>
	<p>Extra large or extra small numbers can be written with scientific (exponential)notation:</p>
	<p>Example</p>
	<p>var y = 123e5;/12300000</p>
	<p>var z = 123e-5;/0.00123</p>
	<p>"Javascript Booleans"</p>
	<p>Booleans can only have two values:true or false.</p>
	<p>Example</p>
	<p>var x = true;</p>
	<p>var y = false;</p>
	<p>Booleans are often used in conditional testing.</p>
	<p>"Javascript Arrays"</p>
	<p>Javascript arrays are written with square brackets.</p>
	<p>Array Items are separated by commas</p>
	<p>var cars = ["Saab,"Volvo","BMW"];</p>
	<p>"Javascript Objects"</p>
	<p>Javascript Objects are written with curly braces.</p>
	<p>var person = firstName:"Dominic",lastName:"Carolino",age:19, eyeColor: "blue";</p></div>
	</div>
	);
	ReactDOM.render(Data,document.getElementById('root'));
	}

	function func(){
		var Func = (
	<div>
	<div className = "home-modal">
	<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
	<p><h3>Functions</h3></p>
	<p>"Javascript Functions"</p>
	<p>A javascript function is a block of code designed to perform a particular task.</p>
	<p>function myFunction(p1,p2)</p>
	<p>return p1*p2;}</p>
	<p>"Javascript Function Syntax"</p>
	<p>A Javascript function is defined with the function keyword,followed by a name, followed by parenthesis().</p>
	<p>Functions name can contain letters,digits,underscore and dollar signs.</p>
	<p>The code to be executed, by the function, is placed inside curly brackets:{}</p>
	<p>function name (parameter1,parameter2,parameter3)</p>
	<p>code to be executed</p>
	<p>}</p>
	<p>"Function invocation" </p>
	<p>The code inside the function will execute when "something" invokes (calls) the function:</p>
	<p>"Function Return"</p>
	<p>When Javascript reaches a return statement, the function will stop executing.</p>
	<p>"Why Function?"</p>
	<p>You can reuse code:Define the code once, and use it many times.</p>
	<p>You can use the same code many times with different arguments, to produce different results.</p>
	<p>"Functions Used as Variables"</p>
	<p>In Javascript you can use function the same way as you use variables.</p>
	<p>Example:</p>
	<p>You can Use:</p>
	<p>var text = "The temperature is " + toCelsius(77) + "Celsius";</p>
	<p>Insted of:</p>
	<p>var x toCelsius(32);</p>
	<p>var text = "The temperature is " + x +"Celsius";</p></div>
	</div>
	);
	ReactDOM.render(Func,document.getElementById('root'));
	}


	function About() {
	var about = (
	<div>
	<div className = "home-modal">
	<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
	<p><h3>Why study Javascript</h3></p>
	<p>JavaScript is one of the 3 languages all web developers must learn:</p>
	<p>1. HTML to define the content of web pages</p>
	<p>2. CSS to specify the layout of web pages.</p>
	<p>3. Javascript to program the behaviour of web pages.</p>
	<p> <h3>Learning Speed</h3></p>
	<p> In this tutorial the learning speed is your choice</p>
	<p>Everything is up to you</p>
	<p>If you are struggling take a break or reread the material</p>
	<p><h3>Did you know?</h3></p>
	<p>JavaScript and Java are completely different languages, both in concept and design.</p>
	<p>Javascript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.</p>
	<p>ECMA 262 is the official name.</p>
	<p>ECMAScript 6 is the lates version of Javascript</p>
	</div>
	</div>
		);
	ReactDOM.render(about,document.getElementById('root'));
	}
	
	function Developer () {
		var developer = (
		<div>
		<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
	<p>The developer is currently a student taking BSIT when this tutorial app was developed.</p>
	<p>To all who patrionized and being benefited by this app is a great honor to the developer.</p></div>
	);
	ReactDOM.render(developer,document.getElementById('root'));
	}
	
	function FAQ (){
		var faq = (
		<div>
		<div className = "home-modal">
		<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
	<p>	1. What is Javascript good for?</p>
		<p>Answer:Forms Validation,Interactive Forms,Visual aides</p>
		<p>2. How do I read/write files?</p>
		<p>Answer:Pure client-side JavaScript cannot write files to the server
		because it simply was never</p> <p>intended to and moreover, that's what server-side languages are used for.</p>
		<p>Perhaps there are security reasons among others for this as well.</p>
		<p>As for reading files with JavaScript, this is completely possible and done quite</p>
		<p>easily if you use something like Vlad's script or David's script.</p>
		<p>3.How do I get multiple scripts to work on a single page?</p>
		<p>Answer:The short (not recommend) answer is to rename all of the variable</p> <p>and function names in
		the second instance of the script thus preventing them from conflicting.</p>
		<p>4.How do I convert a decimal number to hexadecimal, and the other way around?</p>
		<p>Answer:For converting a hexadecimal number to a decimal number, you use</p>
		<p>the parseInt function with a radix of 16.</p>
		</div>
		</div>
		);
		ReactDOM.render(faq,document.getElementById('root'));
	}

	function Home(){
		var home = (
		<div>
		<div className= "navbar" >
			<div className = "navbar-inner" id = "swipe_left">
				<div className = "left"onClick={myHome}>
					<a className = "link" href = "#" onClick={myHome} data-panel = "left" id = "swipe_left">
						<i className = "icon-back icon"></i>
					</a>
				</div>
			</div>
		</div>
		<div className="home-modal"> 
		<h1><p>Welcome to Javascript Offline Tutorial</p></h1>
		</div>
		</div>
	);
	ReactDOM.render(home,document.getElementById('root'));
	}
	
	
	function lebron (){

		var lbrn=(
		<div className = "page-content">

		<div className = "content-block-title">
						<div className = "content-block">
							<div className = "list-block">
								<ul>
									<li>
										<a className = "item-link" href = "#" onClick={Home} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title" onclick={Home}>Home</div>
												</div>
											</div>
										</a>
									</li>		
									<li>
											
										<a className = "item-link" href = "#" onClick={About} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title" >About</div>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a className = "item-link" href = "#" onClick={FAQ} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">FAQ with Answers</div>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a className = "item-link" href = "#" onClick={Developer} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Developer</div>
												</div>
											</div>
										</a>
									</li>
																									
								</ul>
							</div>
						</div>
					</div>
				</div>

	
		);
		ReactDOM.render(lbrn,document.getElementById('root'));
	}

function myHome(){
var Second = (
		<div>
		
			<div className = "page" data-page="">
				<div className = "page-content">
				
					<div className= "navbar" ><div className = "item-title">Javascript Tutorial</div>
					<div className = "navbar-inner" id = "swipe_left">
						<div className = "left" onclick={lebron}>
							<a className = "link" href = "#" onClick={lebron} data-panel = "left" id = "swipe_left">
								<i className = "icon-back icon"></i>
							</a>
						</div>
					</div>
				</div>
					<div className = "content-block-title"></div>
						<div className = "content-block"></div>
							<div className = "list-block">
								<ul>
									<li>
										<a className = "item-link" href = "#" onClick={where_to} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Where To</div>
													
													
												</div>
											</div>
										</a>
									</li>
								<li>
									<a className = "item-link" href = "#" onClick={functions} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Functions and Events</div>
												</div>		
											</div>
									</a>	
								</li>
								
								<li>
									<a className = "item-link" href = "#" onClick = {whitespace} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Whitespace</div>
												</div>		
											</div>
									</a>	
								</li>
								
								<li>
									<a className = "item-link" href = "#"  onClick = {external} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">External Javascript</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={head} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript in Head or Body</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={external} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">External JavaScript</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={output} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Output</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={syntax} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Syntax</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={statements} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Statements</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={variables} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Variables</div>
												</div>		
											</div>
									</a>	
								</li>
								<li>
									<a className = "item-link" href = "#" onClick={comments} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Comments</div>
												</div>		
											</div>
									</a>	
								</li>
									<li>
									<a className = "item-link" href = "#" onClick={data} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Data Types</div>
												</div>		
											</div>
									</a>	
								</li>
									<li>
									<a className = "item-link" href = "#" onClick={func} data-view = "false" data-panel = "false" data-popup = "false"
											data-popover = "false" data-picker = "false" data-login-screen = "false" data-sortable = "false" data-page-name =
											"false" data-template = "false">
											<div className = "item-content">
												<div className = "item-inner">
													<div className = "item-title">Javascript Functions</div>
												</div>		
											</div>
									</a>	
								</li>

								</ul>
								
							</div>
						</div>
					</div>
					<div id = "slide"></div>
				</div>
			
		);
		
	
		ReactDOM.render(Second,document.getElementById('root'));
	}
		
	


//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();




