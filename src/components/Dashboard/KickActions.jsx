  /** @jsx jsx */
  import { Component } from 'react';
  import { jsx, css } from '@emotion/core';
  import User from '../../img/icons/user.svg'
  import UserGrey from '../../img/icons/user-grey.svg'
  import Sendout from '../../img/icons/sendout.svg'
  import SendoutGrey from '../../img/icons/sendout-grey.svg'
  import Company from '../../img/icons/company.svg'
  import CompanyGrey from '../../img/icons/company-grey.svg'
  import Job from '../../img/icons/job.svg'
  import JobGrey from '../../img/icons/job-grey.svg'

  const ButtonKick = css`
    width: 100%;
    display: flex;
    justy-content: space-around;
    padding: 0 20px;


    .l-kick{
        width: calc(100% / 4);
        max-width: 253px;
        height: 54px;
        min-width: 250px;
        background: #1A1C21 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 47px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        transition: .5s ease-in-out;
        margin: 15px ;
        &:hover{
            background-color: #45484E;
        }
        &--candidate{
            .l-kick-icon{
                background-image: url('${UserGrey}');
                width: 20px;
                height: 20px;
                transition: .5s ease-in-out;
                
            }
            &:hover{
                .l-kick-icon{
                    background-image: url('${User}');
                }
            }
        }
        &--company{
            .l-kick-icon{
                background-image: url('${CompanyGrey}');
                width: 20px;
                height: 20px;
                transition: .5s ease-in-out;
                
            }
            &:hover{
                .l-kick-icon{
                    background-image: url('${Company}');
                }
            }
        }
        &--jobOrder{
            .l-kick-icon{
                background-image: url('${JobGrey}');
                width: 20px;
                height: 20px;
                transition: .5s ease-in-out;
                
            }
            &:hover{
                .l-kick-icon{
                    background-image: url('${Job}');
                }
            }
        }
        &--sendOut{
            .l-kick-icon{
                background-image: url('${SendoutGrey}');
                width: 20px;
                height: 20px;
                transition: .5s ease-in-out;
                
            }
            &:hover{
                .l-kick-icon{
                    background-image: url('${Sendout}');
                }
            }
        }
        &-circle{
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: White;
                img{
                    width: 15px;
                    height: auto;
                    object-fit: contain;
                }
        }   
    }
    p{
        margin-left: 15px;
    }
  `;


  class ItemKick extends Component {
      render(){
          return(
            <div className={this.props.className}>
                <div className="l-kick-circle">
                    <div className="l-kick-icon">

                    </div>
                    {/* <img src={this.props.IconAction} alt=""/> */}
                </div>
                <p className="u-Roboto18 u-white u-text-700">{this.props.ActionLabel}</p>
            </div>
          );
      }
  }




  class Actions extends Component{
      render(){
          return(
            <div css={ButtonKick}>
                <ItemKick className="l-kick l-kick--candidate" IconAction={Sendout} ActionLabel={'Add Candidate +'} />
                <ItemKick className="l-kick l-kick--company" IconAction={Sendout} ActionLabel={'Add Company +'} />
                <ItemKick className="l-kick l-kick--jobOrder" IconAction={Sendout} ActionLabel={'Add Job Order +'} />
                <ItemKick className="l-kick l-kick--sendOut" IconAction={Sendout} ActionLabel={'Add Sendout +'} />
            </div>
          );
      }
  }

  export default Actions;