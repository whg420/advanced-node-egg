'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async select(){
    const { ctx } = this;
    let data=await this.service.home.select()
    if(data.length){
      ctx.body={
        code:1,
        data
      }
    }
  }
  async add(){
    const { ctx } = this;
    let {site,phone,username,text}=ctx.request.body;
    let data=await this.service.home.add(site,phone,username,text)
      ctx.body={
        code:1,
        data
    }
  }
  async remove(){
    const { ctx } = this;
    let {id}=ctx.request.body;
    let data=await this.service.home.remove(id)
    if(data.length){
      ctx.body={
        code:0,
        message:'没删掉'
      }
    }else{
      ctx.body={
        code:1,
        message:'已删掉'
      }
    }
  }
  async update(){
    const { ctx } = this;
    let {id,site,phone,username,text}=ctx.request.body;
    let data=await this.service.home.update(id,site,phone,username,text);
    console.log(data.length);
    
    if(data.length){
      ctx.body={
        code:0,
        message:'没更改'
      }
    }else{
      ctx.body={
        code:1,
        message:'已更改'
      }
    }
  }
}

module.exports = HomeController;
