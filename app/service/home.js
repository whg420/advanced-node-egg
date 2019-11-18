'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async select() {
    return this.app.mysql.query('select * from siteList')
  }
  async add(site,phone,username,text) {
    return this.app.mysql.query('insert into siteList(site,phone,username,text) values(?,?,?,?)',[site,phone,username,text])
  }
  async remove(id) {
      
    return this.app.mysql.query('delete from siteList where id=?',[id])
  }
  async update(id,site,phone,username,text) {
      console.log(id,site,phone,username,text);
      
    return this.app.mysql.query('update siteList set site=?,phone=?,username=?,text=? where id=?',[site,phone,username,text,id])
  }
}

module.exports = HomeService;
