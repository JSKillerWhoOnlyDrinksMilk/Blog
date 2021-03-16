/**
 * 使用递归方式实现对一个对象的深拷贝
 * 深拷贝：在堆栈内存中新开辟存储空间(new栈 -> new堆)，更改newobj内的数据，不会影响源数据(obj)的变化
 * 浅拷贝：在栈内存中新增加一个变量，指针指向源数据(obj)
 * 更多详情：https://www.kkqi.top/javascript/blogDetails/19
 * 
 * 入参@obj
 * return @newobj
 */

function AddNewObj(obj, map = new Map()) {
  if (obj && typeof obj === "object") {
    let newobj = Array.isArray(obj) ? [] : {};
    if (map.get(obj)) {
      return map.get(obj);
    }
    map.set(obj, newobj);
    for (let i in obj) {
      newobj[i] = AddNewObj(obj[i], map);
    }
    return newobj;
  } else {
    return obj;
  }
}