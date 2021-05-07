#E选址接口文档

## 用户模块

### 1,请求注册手机验证码

	GET /api/{source}/User/SendValidateCode

	参数
		PhoneNo: 手机号		Type:string
	成功返回: 0:验证码已发送
	错误返回:
		"1": "手机号码无效",
		"2": "发送失败",

### 2,注册

	POST /api/{source}/User/SignUp

	参数
		PhoneNo: 手机号 			    Type:string
		PassWord: 密码 (6到20位)		Type:string
		Code: 验证码					Type:string
		Name:昵称					Type:string
	成功返回value:
		id: 新用户的ID

	错误返回:
		参数数为空,
        1: 验证码不正确,
        2: 验证码不能为空,
        3: 手机号已存在,
        4: 手机号不能为空,
        5: 密码不能为空,
        6: 未知错误请联系管理员


### 3,登录

	POST /api/{source}/User/SignIn

	参数
		PhoneNo: 手机号			Type:string
		PassWord: 密码			Type:string
	成功返回value:
		id: 用户ID
		ImgPath : 头像地址
		Name:	用户名
	错误返回:
			参数为空,
			手机号或密码不正确,
			登录失败请联系管理员,
			手机号未注册


### 4,忘记密码

	POST /api/{source}/User/ForgetPwd

	参数：
	{
		PhoneNo：手机号			Type:string
		Code：验证码			Type:string
		Pwd ：密码 			Type:string
	}

	成功返回value:
	{
		true  	
	}

	失败返回：
	{
		false
	}
### 5,修改密码

	POST /api/{source}/User/ModifyPwd

	参数：
	{
		UserId:用户Id				Type:int
		OldPassword: 旧密码			Type:string
		NewPassWord: 新密码 			Type:string
	}

	成功返回value:
	{
		true  	
	}

	失败返回：
	{
		false
	}

### 6,我的发布列表

	GET /api/{source}/User/MyPublishList

	参数：
	{
		UserId:用户Id				Type:int
		PageIndex:
		PageSize
	}

	成功返回value:
	{
		Id:商铺Id
		Img:商铺图片
		RentalType:商铺租赁类别(商铺出租,1;商铺转租2)
		BuildingArea:建筑面积
		Address:地址
		RentalAmount:租金
		RentalAmountType:租金类别(元/平米.天,元/平米.月,元/月)
		IsNegotiable:是否面议
		PublisherImg:发布人头像
		IsFavorite:是否收藏  
		CountyId:区Id	
		RentalState: 出租状态
	}

	失败返回：
	{
		
	}

### 7,我的收藏列表

	GET /api/{source}/User/MyFavoritesList

	参数：
	{
		UserId:用户Id				Type:int
		PageIndex:
		PageSize
	}

	成功返回value:
	{
		Id:商铺Id
		Img:商铺图片
		RentalType:商铺租赁类别(商铺出租,1;商铺转租2)
		BuildingArea:建筑面积
		Address:地址
		RentalAmount:租金
		RentalAmountType:租金类别(元/平米.天,元/平米.月,元/月)
		IsNegotiable:是否面议
		PublisherImg:发布人头像	
		CountyId:区Id
		RentalState: 出租状态,
		IsFavorite:是否收藏  
	}

	失败返回：
	{
		
	}

### 8,我的足迹列表

	GET /api/{source}/User/MyTraceList

	参数：
	{
		UserId:用户Id				Type:int
		PageIndex:
		PageSize
	}

	成功返回value:
	{
		Id:商铺Id
		Img:商铺图片
		RentalType:商铺租赁类别(商铺出租,1;商铺转租2)
		BuildingArea:建筑面积
		Address:地址
		RentalAmount:租金
		RentalAmountType:租金类别(元/平米.天,元/平米.月,元/月)
		IsNegotiable:是否面议
		PublisherImg:发布人头像
		IsFavorite:是否收藏  	
		CountyId:区Id
		RentalState: 出租状态
	}

	失败返回：
	{
		
	}

### 9,上传图片

	POST /api/{source}/User/UploadPic

	参数：
	{
		UserId:用户Id				Type:int　
		UserName: 用户名
		头像地址 :要上传的图像流　　
	}　(说明: 用户名和上的图像必须有一项不能为空)

	成功返回value:
	{
		头像地址url 	
	}

	失败返回：
	{
		修改用户名发生错误，
		参数不能为空
	}

### 10, 添加收藏

	POST /api/{source}/User/AddFavorite

	参数：
	{
		UserId:用户Id				Type:int　
		HouseInfoId		
	}

	成功返回value:
	{
		true
	}

	失败返回：
	{
		
	}

### 10, 移除收藏

	POST /api/{source}/User/RemoveFavorite

	参数：
	{
		UserId:用户Id				Type:int　
		HouseInfoId		
	}

	成功返回value:
	{
		true
	}

	失败返回：
	{
	}

## 商铺模块

## 1,获取区列表

	GET /api/{source}/HouseInfo/GetCountyList

	参数：
	{
		CityId: 城市Id    Type:Int
	}

	成功返回value:
	{
		CountyId:区Id
		CountyName:区名字
		CountyImg:区背景图
	}

	失败返回
	{
		城市Id有误
	}

## 2,获取商铺列表

	GET /api/{source}/HouseInfo/GetShopList

	参数：
	{
		UserId:用户Id  Type:Int   可以传0,如果传零的话列表中的收藏字段就是false
		CountyId: 区Id    Type:Int	
		PageIndex:
		PageSize	
	}

	成功返回value:
	{
		Id:商铺Id
		Img:商铺图片
		RentalType:商铺租赁类别(商铺出租,1;商铺转租2)
		BuildingArea:建筑面积
		Address:地址
		RentalAmount:租金
		RentalAmountType:租金类别(元/平米.天,元/平米.月,元/月)
		IsNegotiable:是否面议
		PublisherImg:发布人头像
		IsFavorite:是否收藏
		Title:房源标题
		RentalState: 出租状态
	}

	失败返回
	{
		城市Id有误
	}

## 3,过滤商铺列表
	GET /api/{source}/HouseInfo/GetShopListFilter
	参数：
	{
		UserId:用户Id  Type:Int   可以传0,如果传零的话列表中的收藏字段就是false
		CountyId: 区Id    Type:Int
		Floor:楼层 (如果是全部传0,否则就传具体楼层) 	Type:Int	
		ShopType:商铺类型
		MinPrice:最小价格
		MaxPrice:最大价格
		DecorationLevel:房屋装修级别
		PageIndex:
		PageSize
	}

	成功返回value:
	{
		Id:商铺Id
		Img:商铺图片
		RentalType:商铺租赁类别(商铺出租,1;商铺转租2)
		BuildingArea:建筑面积
		Address:地址
		RentalAmount:租金
		RentalAmountType:租金类别(元/平米.天,元/平米.月,元/月)
		IsNegotiable:是否面议
		PublisherImg:发布人头像
		IsFavorite:是否收藏
		RentalState: 出租状态
	}

	失败返回
	{
		城市Id有误
	}

## 4,商铺详情
	GET /api/{source}/HouseInfo/GetShopDetails
	参数：
	{
		UserId:用户Id  Type:Int   可以传0,如果传零的话列表中的收藏字段就是false
		ShopId:商铺Id  Type:Int
	}

	成功返回value:
	{
		SmallImgList:小图集合
		[
			SmallImg
		]
		BigImgList:大图集合
		[
			BigImg
		]
		RentalType:商铺租赁类别(商铺出租,1;商铺转租2)
		BuildingArea:建筑面积
		Address:地址
		DetailsAddress:详细地址
		RentalAmount:租金
		RentalAmountType:租金类别(元/平米.天,元/平米.月,元/月)
		IsNegotiable:是否面议
		UsableArea:套内面积
		UsableRentalAmount:套内租金
		UsableRentalAmountType:套内租金类别(元/平米.天,元/平米.月,元/月)
		Floor:楼层
		IndoorHeight:室内层高
		SignFrontsLength:招牌长
      	SignFrontsWidth:招牌宽
      	SignFrontsHeight:招牌高
      	ShopFrontsLength:商铺门面长
      	ShopFrontsWidth:商铺门面宽
      	ShopFrontsHeight:商铺门面高
		ShopType:商铺类型
		RentalDuration:租赁年限
		NoRentalDays:装修免租期
		RentalAscYears:租金递增幅度(年)
		RentalAscPer:租金递增百分比
		TransferAmount:转让费
		PropertyAmount:物业费
		PayType:支付方式
		IsSeparate:是否分割
		DecorationLevel:装修程度
		HousingSupport:
		[
			SupportIcon:配套图标
			SupportName:配套名称
			SupportId:配套Id
		]
		Info:店铺描述
		PublisherImg:发布人头像
		PublisherName:发布人姓名
		PublisherPhoneNo:发布人电话

		IsFavorite:是否收藏		
		RentalState: 出租状态
		Title:
		CountyId:区Id
		UserId:
	}

	失败返回
	{
		店铺Id有误
	}

## 5, 发布房源
	POST /api/{source}/HouseInfo/PublishShop
	参数：
	{
		UserId:用户Id  Type:Int
		Title:房源标题	Type:string
		RentalType:商铺租赁类别(商铺出租,1;商铺转租2)  Type:Int
		BuildingArea:建筑面积					Type:double
		Address:详细地址					Type:string
		RentalAmount:租金						Type:double
		RentalAmountType:租金类别(元/平米.天,元/平米.月,元/月)  Type:Int
		IsNegotiable:是否面议					Type:Int (0,非面议;1,面议)
		UsableArea:套内面积						Type:double
		UsableRentalAmount:套内租金				Type:double
		UsableRentalAmountType:套内租金类别(元/平米.天,元/平米.月,元/月)	
		CountyId:区Id
		Floor:楼层		Type:Int
		IndoorHeight:室内层高	Type:double
		SignFrontsLength:招牌长  Type:double
      	SignFrontsWidth:招牌宽	Type:double
      	SignFrontsHeight:招牌高	Type:double
      	ShopFrontsLength:商铺门面长	Type:double
      	ShopFrontsWidth:商铺门面宽	Type:double
      	ShopFrontsHeight:商铺门面高	Type:double
		ShopType:商铺类型		Type:int
		RentalDuration:租赁年限	Type:int
		NoRentalDays:装修免租期	Type:int
		RentalAscYears:租金递增幅度(年)	Type:int
		RentalAscPer:租金递增百分比	Type:double
		TransferAmount:转让费	Type:double
		PropertyAmount:物业费	Type:double
		PayType:支付方式	Type:int
		IsSeparate:是否分割	Type:int (0,不分割;1,分割)
		DecorationLevel:装修程度	Type:int
		HousingSupport: 房屋配套 Type:string (多个以逗号分割)
		Info:店铺描述		Type:string
		ValidityDate:有效期 Type:int
		ContactUser:联系人
		ContactPhoneNo:联系人电话
		ContactSex:联系人性别
		Code:验证码
		ImgList:图片集合
		[
			Img
		]
	}

	成功返回value:
	{
		true
	}

	失败返回
	{
		false
	}

## 6,模糊搜索商铺列表

	GET /api/{source}/HouseInfo/GetShopListByKeywords

	参数：
	{
		UserId, 可以传0,如果传零的话列表中的收藏字段就是false
		KeyWords:	查询的商铺地址关键字
		PageIndex:
		PageSize	
	}

	成功返回value:
	{
		Id:商铺Id
		Img:商铺图片
		RentalType:商铺租赁类别(商铺出租,1;商铺转租2)
		BuildingArea:建筑面积
		Address:地址
		RentalAmount:租金
		RentalAmountType:租金类别(元/平米.天,元/平米.月,元/月)
		IsNegotiable:是否面议
		PublisherImg:发布人头像
		IsFavorite:是否收藏
		Title:房源标题
		RentalState: 出租状态
	}

	失败返回
	{
		
	}

## 7, 编辑房源
	POST /api/{source}/HouseInfo/EditShop
	参数：
	{
		HouseInfoId:房源Id Type:Int
		UserId:用户Id  Type:Int
		Title:房源标题	Type:string
		RentalType:商铺租赁类别(商铺出租,1;商铺转租2)  Type:Int
		BuildingArea:建筑面积					Type:double
		Address:详细地址					Type:string
		RentalAmount:租金						Type:double
		RentalAmountType:租金类别(元/平米.天,元/平米.月,元/月)  Type:Int
		IsNegotiable:是否面议					Type:Int (0,非面议;1,面议)
		UsableArea:套内面积						Type:double
		UsableRentalAmount:套内租金				Type:double
		UsableRentalAmountType:套内租金类别(元/平米.天,元/平米.月,元/月)	
		CountyId:区Id
		Floor:楼层		Type:Int
		IndoorHeight:室内层高	Type:double
		SignFrontsLength:招牌长  Type:double
      	SignFrontsWidth:招牌宽	Type:double
      	SignFrontsHeight:招牌高	Type:double
      	ShopFrontsLength:商铺门面长	Type:double
      	ShopFrontsWidth:商铺门面宽	Type:double
      	ShopFrontsHeight:商铺门面高	Type:double
		ShopType:商铺类型		Type:int
		RentalDuration:租赁年限	Type:int
		NoRentalDays:装修免租期	Type:int
		RentalAscYears:租金递增幅度(年)	Type:int
		RentalAscPer:租金递增百分比	Type:double
		TransferAmount:转让费	Type:double
		PropertyAmount:物业费	Type:double
		PayType:支付方式	Type:int
		IsSeparate:是否分割	Type:int (0,不分割;1,分割)
		DecorationLevel:装修程度	Type:int
		HousingSupport: 房屋配套 Type:string (多个以逗号分割)
		Info:店铺描述		Type:string
		ValidityDate:有效期 Type:int
		ContactUser:联系人
		ContactPhoneNo:联系人电话
		ContactSex:联系人性别
		Code:验证码
		OldImgList : 已删除的图片id, Type:string(多个以逗号分隔)
		ImgList:图片集合
		[
			Img
		]
	}

	成功返回value:
	{
		true
	}

	失败返回
	{
		false
	}

## 8,将商铺设置为已出租

	POST /api/{source}/HouseInfo/Rented

	参数：
	{
		UserId:
		HouseInfoId
	}

	成功返回value:
	{
		true
	}

	失败返回
	{
		参数不能为空,
		已经出租,
		设置为出租失败
	}

## 9,添加呼叫记录

	POST /api/{source}/HouseInfo/AddCallHistory

	参数：
	{
		UserId:
		HouseInfoId
	}

	成功返回value:
	{
		true
	}

	失败返回
	{
		参数不能为空		
	}

## 百科模块

### 1,获取百科分类列表
	GET /api/{source}/Wiki/GetWikiTypeList
	参数：
	{
		
	}

	成功返回value:
	{
		Id:分类Id
		Name:分类名称
	}

	失败返回
	{
		
	}

### 2,获取百科内容列表
	GET /api/{source}/Wiki/GetWikiContentList
	参数：
	{
		Id:分类Id  Type:int
		PageIndex:	Type:int
		PageSize: 	Type:int
	}

	成功返回value:
	{
		Id:内容Id
		Title:内容标题名称
	}

	失败返回
	{
		
	}

### 2,获取百科内容详情
	GET /api/{source}/Wiki/GetWikiContentDetails
	参数：
	{
		Id:内容Id
	}

	成功返回value:
	{		
		Id:内容Id   可不用
		TypeId:    所属分类Id可不用
		Title:标题
		BaikeContent:内容
		ContentLink:内容转摘链接
		ContentOrign:内容来源
	}

	失败返回
	{
		
	}