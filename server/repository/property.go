package repository

import (
	"context"

	"next-terminal/server/model"
)

var PropertyRepository = new(propertyRepository)

type propertyRepository struct {
	baseRepository
}

func (r propertyRepository) FindAll(c context.Context) (o []model.Property) {
	// 查询所有属性对象
	if r.GetDB(c).Find(&o).Error != nil {
		return nil
	}
	return
}

func (r propertyRepository) Create(c context.Context, o *model.Property) (err error) {
	err = r.GetDB(c).Create(o).Error
	return
}

func (r propertyRepository) UpdateByName(c context.Context, o *model.Property, name string) error {
	o.Name = name
	return r.GetDB(c).Updates(o).Error
}

func (r propertyRepository) DeleteByName(c context.Context, name string) error {
	return r.GetDB(c).Where("name = ?", name).Delete(model.Property{}).Error
}

func (r propertyRepository) FindByName(c context.Context, name string) (o model.Property, err error) {
	err = r.GetDB(c).Where("name = ?", name).First(&o).Error
	return
}

func (r propertyRepository) FindAllMap(c context.Context) map[string]string {
	properties := r.FindAll(c)
	// 进行属性填充
	propertyMap := make(map[string]string)
	for i := range properties {
		propertyMap[properties[i].Name] = properties[i].Value
	}
	return propertyMap
}
