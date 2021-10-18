import { object } from '@amcharts/amcharts5';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiChoteService } from '../service/api-chote.service';
import * as m from '../model/model';
import { SelectItem } from 'primeng/api';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  constructor(public ps: ApiChoteService) {}
  action = 'add';
  displayModal: boolean | undefined;
  //dp: m.Dentpersonall = {} as m.Dentpersonall;
  dp: m.Dentpersonall = {};
  dentps = [];
  modalTitle = 'เพิ่มข้อมูล';
  office = '10702';
  offices: any = [];
  spectype_idOptions!: SelectItem[];
  level_idOptions!: SelectItem[];
  degnameOptions!: SelectItem[];
  position_idOptions!: SelectItem[];
  status_idOptions!: SelectItem[];
  sexOptions!: SelectItem[];
  denttype_idOptions!: SelectItem[];
  sitem!: SelectItem;
  personClone: any;
  oldrow: any;
  editPerson(ob: any) {
    this.oldrow = { ...ob };
    this.dp = { ...ob };
    this.personClone = { ...ob };
     this.modalTitle = 'ปรับปรุงข้อมูล';
    this.action = 'edit';
    this.isupload=false;
    this.showModalDialog();
  }
  doCancel(dp: any) {
    //  this.dp = this.personClone;
    dp = { ...this.personClone };
    this.displayModal = false;
  }
  doSave(dp: any) {
    this.dp = { ...dp };
    console.log('newDP=', dp);
    this.displayModal = false;
  }
  showModalDialog() {
    this.displayModal = true;
  }
  getDentps() {
    this.ps.getDentps().then((x: any) => {
      this.dentps = x['message'];
    });
  }
  hossAll=[];
  hoss=[];
  positions=[];
  spectypes=[];
  speclevels=[]; 
  pvs:any=[];
  amps:any=[];
  pvsAll:any=[];
  ampsAll:any=[];
  hostypes=[];
  selectPv="36";
  selectAmp="3602";
  selectHos="";
  isupload=false;
  
  doFilterPv(e:any){
    let p = e.value;
 this.amps = this.ampsAll.filter(function (a:any) {
    let v =String(a.ampcode).substr(0,2);
  return  v == p;
});
let amp1 = this.amps[0]['ampcode'];
this.selectAmp=amp1;
this.hoss = this.hossAll.filter((a: { ampcode: any })=>{
  return  a.ampcode == amp1 ;
   }); 
      }
  doFilterAmp(e:any){
    let p = e.value;
    this.hoss = this.hossAll.filter(function (a:any) {
       let v =a.ampcode;
     return  v == p;
  });
}
  getHospitals() {
    let  uniqueArray = (a: any[]) => [...new Set(a.map((o: any) => JSON.stringify(o)))].map(s => JSON.parse(s));
    this.ps.getHospitals().then((x: any) => {
      this.hossAll = x['message'];
      //this.pvsAll = 
      this.pvsAll =uniqueArray(this.hossAll.map(x=>({pvcode:x['pvcode'],pvname:x['pvname']}))) ;
      this.ampsAll=uniqueArray(this.hossAll.map(x=>({ampcode:x['ampcode'],ampname:x['ampname']})));
      this.pvs=[...this.pvsAll];
      this.amps = this.ampsAll.filter((a: { ampcode: any })=>{
   return  String(a.ampcode).substr(0,2) == this.selectPv ;
    });
    this.hoss = this.hossAll.filter((a: { ampcode: any })=>{
      return  a.ampcode == this.selectAmp ;
       }); 
    });
  }
  getCodetables() {
    this.ps.getCodetables().then((x: any) => {
      this.positions = x['position'];
      this.spectypes = x['spectype'];
      this.speclevels = x['speclevel'];
      this.spectype_idOptions =this.spectypes.map(x => ({ label: x['specname'], value: x['spectype_id'] }));
      this.spectype_idOptions =[{ label: 'ไม่ระบุสาขา', value: '0' },...this.spectype_idOptions];
      this.position_idOptions =this.positions.map(x => ({ label: x['positionname'], value: x['position_id'] }));
      this.position_idOptions =[{ label: 'โปรดเลือกตำแหน่ง', value: '' },...this.position_idOptions];
      console.log( this.positions);
      console.log( "poOb",this.position_idOptions);
      console.log( this.spectypes);
      console.log( this.speclevels);
      console.log( this.spectype_idOptions);
      
    });
  }
  uploadedFiles: any[] = [];
  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    console.log(this.uploadedFiles);
    
  }
  ngOnInit(): void {
    // console.log(Object.keys(this.dp));

    this.getDentps();
this.getCodetables();
this.getHospitals();
    this.denttype_idOptions = [
      { label: 'โปรดเลือกประเภท', value: '0' },
      { label: 'ทันตแพทย์', value: '1' },
      { label: 'ทันตาภิบาล', value: '2' },
      { label: 'นักวิชาการสาธารณสุข', value: '3' },
      { label: 'ผู้ช่วยทันตกรรม', value: '4' },
    ];
    this.sexOptions = [
      { label: 'โปรดเลือกเพศ', value: '0' },
      { label: 'ชาย', value: '1' },
      { label: 'หญิง', value: '2' },
    ];
    this.status_idOptions = [
      { label: 'โปรดเลือกสถานะ', value: '0' },
      { label: 'ทำงานอยู่', value: '1' },
      { label: 'ลาเรียน', value: '2' },
    ];
 //   this.position_idOptions = [{ label: 'โปรดเลือกตำแหน่ง', value: '0' }];
   
    this.level_idOptions = [
      { label: 'โปรดเลือกระดับ', value: '0' },
      { label: 'ประกาศนียบัตร', value: 'ประกาศนียบัตร' },
      { label: 'ปริญญาโท', value: 'ปริญญาโท' },
      { label: 'Resident', value: 'Resident' },
    ];
  }
}
