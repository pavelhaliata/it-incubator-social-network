"use strict";(self.webpackChunkit_incubator_social_network=self.webpackChunkit_incubator_social_network||[]).push([[560],{8400:(e,s,t)=>{t.d(s,{Z:()=>a});t(2791);const a=t.p+"static/media/icons8-facebook.f8e2d43374926ed3c064613312f73f5b.svg"},898:(e,s,t)=>{t.d(s,{Z:()=>a});t(2791);const a=t.p+"static/media/icons8-github.d9cbf1f5f12abd4eae07c70bd4023976.svg"},4996:(e,s,t)=>{t.d(s,{Z:()=>a});t(2791);const a=t.p+"static/media/icons8-instagram.d55e94d36e7f97662addaa0bfde542bf.svg"},1103:(e,s,t)=>{t.d(s,{Z:()=>a});t(2791);const a=t.p+"static/media/icons8-twitter.4cebc37907dc1cdd2f42c7359894e8d7.svg"},7937:(e,s,t)=>{t.d(s,{Z:()=>a});t(2791);const a=t.p+"static/media/icons8-vk-com.e6f03d6a4c0ca2204463273ee7262ab9.svg"},9544:(e,s,t)=>{t.d(s,{Z:()=>a});t(2791);const a=t.p+"static/media/icons8-youtube.335dc455860d2a0f403000ddc81837dc.svg"},2153:(e,s,t)=>{t.d(s,{Z:()=>a});t(2791);const a=t.p+"static/media/link_share_icon.618bc37c030bcf390cf4d3f712dbb3de.svg"},3560:(e,s,t)=>{t.r(s),t.d(s,{Profile:()=>b});var a=t(4730),i=t(7315),r=t(8400),l=t(898),o=t(4996),c=t(6882),n=t(1103),d=t(7937),h=t(9544),p=t(2153),u=t(9101),f=t(2791);const m="profileStatus_status__3OSx1",x="profileStatus_input__fs+mq";var A=t(184);class _ extends f.Component{constructor(){super(...arguments),this.state={editMode:!1,value:this.props.userStatus},this.activateEditMode=()=>{this.setState({editMode:!0})},this.disActivateEditMode=()=>{this.setState({editMode:!1}),this.props.updateUserStatusAsync(this.state.value)}}componentDidMount(){this.props.userAuthorizedId&&this.props.getUserStatusAsync(this.props.userAuthorizedId)}componentDidUpdate(e){e.userStatus!==this.props.userStatus&&this.setState({value:this.props.userStatus})}onChangeHandler(e){this.setState({value:e.target.value})}render(){return(0,A.jsxs)("div",{children:[!this.state.editMode&&(0,A.jsx)("span",{className:"".concat(m),onDoubleClick:()=>{this.activateEditMode()},children:this.props.userStatus?this.props.userStatus:"your status..."}),this.state.editMode&&(0,A.jsx)("input",{className:x,autoFocus:!0,value:this.state.value,onBlur:()=>{this.disActivateEditMode()},onChange:e=>this.onChangeHandler(e)})]})}}var j=t(5099);const g=(0,u.$j)((e=>({userStatus:e.profilePage.userStatus,userAuthorizedId:e.authData.id})),{updateUserStatusAsync:j.pQ,getUserStatusAsync:j.C7})(_);var k=t(1087);const v={row:"profile_row__5A573",block:"profile_block__EzCv3",block_title:"profile_block_title__C2ZE4",block_content:"profile_block_content__BMiva",personal_info:"profile_personal_info__xVFSB",title:"profile_title__coGTI",date:"profile_date__1quK5",text:"profile_text__CE7eH",menu:"profile_menu__uvw0t",item:"profile_item__k4Zu2",edit_link:"profile_edit_link__C2vmt",hidden:"profile_hidden__lUbO3",avatar:"profile_avatar__xe29C"};class b extends f.Component{constructor(e){super(e),this.filePicker=void 0,this.filePicker=f.createRef(),this.handlerPick=this.handlerPick.bind(this),this.uploadPhotoHandler=this.uploadPhotoHandler.bind(this)}handlerPick(){var e;null===(e=this.filePicker.current)||void 0===e||e.click()}uploadPhotoHandler(e){var s;null!==(s=e.target.files)&&void 0!==s&&s.length&&this.props.uploadPhotoAsync(e.target.files[0])}render(){return(0,A.jsxs)("div",{className:v.row,children:[(0,A.jsx)("div",{className:v.col,children:(0,A.jsxs)("div",{className:v.block,children:[(0,A.jsx)("div",{className:v.block_title,children:(0,A.jsx)("h6",{className:v.title,children:"Personal Info"})}),this.props.requestStatus===a.eE.loading?(0,A.jsx)("div",{style:{width:"100%",textAlign:"center"},children:(0,A.jsx)("img",{src:i.Z,style:{width:"34px"}})}):(0,A.jsxs)("div",{className:v.block_content,children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("input",{ref:this.filePicker,className:v.hidden,type:"file",accept:"image*/,.png,.jpeg",onChange:this.uploadPhotoHandler}),this.props.errorMessage&&(0,A.jsxs)("span",{style:{color:"red"},children:[this.props.errorMessage,". Please, choose correct file."]})]}),(0,A.jsx)("div",{style:{textAlign:"center"},children:(0,A.jsx)("img",{className:v.avatar,onClick:this.handlerPick,src:this.props.userProfileData.photos.small,alt:"avatar"})}),(0,A.jsxs)("ul",{className:v.personal_info,children:[(0,A.jsxs)("li",{children:[this.props.userProfileData.lookingForAJob&&(0,A.jsx)("span",{style:{display:"block",textAlign:"center",marginBottom:"8px"},children:"Open to work"}),(0,A.jsx)("span",{className:v.title,children:"Status:"}),(0,A.jsx)("span",{className:v.text,children:(0,A.jsx)(g,{})})]}),(0,A.jsxs)("li",{children:[(0,A.jsx)("span",{className:v.title,children:"Name:"}),(0,A.jsx)("span",{className:v.text,children:this.props.userProfileData.fullName})]})]}),(0,A.jsx)(k.OL,{className:v.edit_link,to:"/edit-profile",children:"Edit Profile"})]})]})}),(0,A.jsxs)("div",{className:v.col,children:[(0,A.jsxs)("div",{className:v.block,children:[(0,A.jsx)("div",{className:v.block_title,children:(0,A.jsx)("h6",{className:v.title,children:"About me:"})}),(0,A.jsx)("div",{className:v.block_content,children:(0,A.jsxs)("ul",{className:v.personal_info,children:[(0,A.jsxs)("li",{children:[(0,A.jsx)("span",{className:v.title,children:"About Me:"}),(0,A.jsx)("span",{className:v.text,children:this.props.userProfileData.aboutMe})]}),(0,A.jsxs)("li",{children:[(0,A.jsx)("span",{className:v.title,children:"My skills:"}),(0,A.jsx)("span",{className:v.text,children:this.props.userProfileData.lookingForAJobDescription})]})]})})]}),(0,A.jsxs)("div",{className:v.block,children:[(0,A.jsx)("div",{className:v.block_title,children:(0,A.jsx)("h6",{className:v.title,children:"Contacts:"})}),(0,A.jsx)("div",{className:v.block_content,children:(0,A.jsxs)("ul",{className:v.menu,children:[this.props.userProfileData.contacts.facebook&&(0,A.jsx)("li",{className:v.item,children:(0,A.jsx)("a",{target:"_blank",rel:"noreferrer",href:this.props.userProfileData.contacts.facebook,children:(0,A.jsx)("img",{src:r.Z,alt:""})})}),this.props.userProfileData.contacts.twitter&&(0,A.jsx)("li",{className:v.item,children:(0,A.jsx)("a",{target:"_blank",rel:"noreferrer",href:this.props.userProfileData.contacts.twitter,children:(0,A.jsx)("img",{src:n.Z,alt:""})})}),this.props.userProfileData.contacts.instagram&&(0,A.jsx)("li",{className:v.item,children:(0,A.jsx)("a",{target:"_blank",rel:"noreferrer",href:this.props.userProfileData.contacts.instagram,children:(0,A.jsx)("img",{src:o.Z,alt:""})})}),this.props.userProfileData.contacts.vk&&(0,A.jsx)("li",{className:v.item,children:(0,A.jsx)("a",{target:"_blank",rel:"noreferrer",href:this.props.userProfileData.contacts.vk,children:(0,A.jsx)("img",{src:d.Z,alt:""})})}),this.props.userProfileData.contacts.youtube&&(0,A.jsx)("li",{className:v.item,children:(0,A.jsx)("a",{target:"_blank",rel:"noreferrer",href:this.props.userProfileData.contacts.youtube,children:(0,A.jsx)("img",{src:h.Z,alt:""})})}),this.props.userProfileData.contacts.github&&(0,A.jsx)("li",{className:v.item,children:(0,A.jsx)("a",{target:"_blank",rel:"noreferrer",href:this.props.userProfileData.contacts.github,children:(0,A.jsx)("img",{src:l.Z,alt:""})})}),this.props.userProfileData.contacts.website&&(0,A.jsx)("li",{className:v.item,children:(0,A.jsx)("a",{target:"_blank",rel:"noreferrer",href:this.props.userProfileData.contacts.website,children:(0,A.jsx)("img",{src:c,alt:""})})}),this.props.userProfileData.contacts.mainLink&&(0,A.jsx)("li",{className:v.item,children:(0,A.jsx)("a",{target:"_blank",rel:"noreferrer",href:this.props.userProfileData.contacts.mainLink,children:(0,A.jsx)("img",{src:p.Z,alt:""})})})]})})]})]})]})}}},6882:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpUlEQVR4nO1WS29NURS+iTA18KbKjGLmP5BIDDxuDbUDd4B7zznft885F4M74D+oiVCPkcdEFDXqH/AoA1EStCIGVOJZ7a2s5tvJyWmv9rpNY3BXspN99ll7fWuvd6HQpv+NSG4hmQK4C2AMwA+tMZ0laZp2LhpgmqadJK+QnCQ5Pc+aBNAPYHNLoACOABg3oQB+kawL4DHJHWEY7gTwRGd18dj+M4Div4IGGaAbzrljUmA8juONns/2JL/YP+MBcFN8UyRPNgVKslsvmDIFdPZASpyaQ8nT+nfPvp1zoe4a+OEFgdoLAHzSC0IJXg3gty3n3Pr8nUqlso7khOJgrRSNvIVa9nmbFoUA3ALw2vYkz5lvisXiMotM81UQBFtJjpK8Lp6HAAa1tzx/r5y3IKvorqXVWfG8NIxZwAKoV6vVVQCGJGA3gIt2STxXSb4olUrLAXwF8K1Wq60A8NzA9YARkpftroJrKE3TlcqSE7OAgyDoEth+kj8BDJMkgEck+wTcqzTZS/IDyY/OuT2K5l7x9JF8ppQatqISRdE+Wa1rTnPLlAPSuqLcnfBVKGPKAXshgGtWp70rJKNbyg3Kiq98fW/oZ/nKzHMewHZfCsvl8ppMLIzo/CiAHu1nXGEkV1nhmI7jeJvJksz+vwXYjKAoig7p+42ZOqfcBeNJkqRD5bLuXZHhsVo+qv1BAfc0BG7TklKcaRJW6PNNIgzDDY2ahP33TQIAfJOweFgQuLWyTFvz4Pcl6Eye3858mmVAZ9qqBVdTLwdQ9mlhpc4PAtb0s4NAFEWbsoMAyduZQeB4U6DZl1u9zY8+Nu7Y2ENyF8mn+dHHXOWcO1BohZIk6VDtnXfYUxxcMiu0BJpXAIADcAfAO5Lftd7amdX1BQdRmwpLSH8AH8xdQuC2I6IAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=560.770f6a4c.chunk.js.map