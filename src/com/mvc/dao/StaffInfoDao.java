package com.mvc.dao;

import java.util.List;

import com.mvc.entityReport.User;

public interface StaffInfoDao {
	//
	List<User> getStaffInfo();
	
	// 根据页数筛选全部用户 信息列表
		List<User> findUserByPage(String searchKey, Integer offset, Integer end);
			
	// 查询信息总条数
		Integer countTotal(String searchKey);
		
	// 删除用户信息
		Boolean updateState(Integer user_id);
	

}
