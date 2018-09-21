<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  		<meta charset="UTF-8" />
  		<title>公元物业E巡通</title>
		<style>
			body {
				background-image: url(images/bgi.jpg);
				background-repeat: no-repeat;
				background-size: 100% 100%;
				-moz-background-size: 100% 100%;
				display: -moz-box;
				-moz-box-orient: vertical;
				-moz-box-align: center;
				-moz-box-pack: center;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-box-align: center;
				-webkit-box-pack: center;
			}
			
			.container {
				width: 100%;
				height: 70%;
				display: flex;
				flex-wrap: warp;
				justify-content: center;
				overflow: hidden;
			}
			.col-4:hover {
				transform: scale(1.1,1.1)
			}
			
			.col-4 {
				width: 20%;
				margin: 1% 3%;
				border-radius: 5px;
				background-color: rgba(255, 255, 255, 0.8);
				text-decoration:none;
			}
			
			.col-img {
				width: 60%;
				margin-left: 20%;
				border-radius: 50%;
				margin-top: 20%;
			}
			
			.col-img img {
				width: 100%;
			}
			
			.col-font {
				color: #333333;
				font-family: "Varela Round", Arial, sans-serif;
				font-weight: 400;
				text-align: center;
				margin-top: 20%;
				font-size: 17px;;
			}
		</style>
  </head>  
  <body>       
     <%--    <a href="${pageContext.request.contextPath}/routeController/toSystemIndex.do">ajaxPage</a><br> --%>
        <div class="container">
			<a class="col-4" href="jsp/system/index.jsp">
				<div class="col-img">
					<img src="images/school-badge.png">
				</div>
				<div class="col-font">
					<div>系统管理</div>
				</div>
			</a>
			<a class="col-4" href="jsp/project/index.jsp">
				<div class="col-img">
					<img src="images/school-badge.png">
				</div>
				<div class="col-font">
					<p>项目管理</p>
				</div>
			</a>
			<a class="col-4" href="jsp/equip/index.jsp">
				<div class="col-img">
					<img src="images/school-badge.png">
				</div>
				<div class="col-font">
					<p>设备管理</p>
					<span></span>
				</div>
			</a>
		</div>
  </body>
</html>
