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
import ItemKick from '../Utilities/ButtonKick'

const ButtonKick = css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    flex-wrap: wrap;
    .l-kick{
        width: calc(100% / 4);
        &--candidate{
            .l-kick-icon{
                background-image: url('${UserGrey}');
                
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
            
                
            }
            &:hover{
                .l-kick-icon{
                    background-image: url('${Sendout}');
                }
            }
        }
    }
 
  `;


class Actions extends Component {
    render() {
        return (
            <div css={ButtonKick}>
                <ItemKick className="l-kick l-kick--candidate" ActionLabel={'Add Candidate +'} />
                <ItemKick className="l-kick l-kick--company" ActionLabel={'Add Company +'} />
                <ItemKick className="l-kick l-kick--jobOrder" ActionLabel={'Add Job Order +'} />
                <ItemKick className="l-kick l-kick--sendOut" ActionLabel={'Add Sendout +'} />
            </div>
        );
    }
}

export default Actions;