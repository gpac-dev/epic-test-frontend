import User from '../img/icons/user.svg'
import UserGrey from '../img/icons/user-grey.svg'
import { injectGlobal } from 'emotion'

injectGlobal`

.l-row{
    padding: 0 20px;
    .l-row-activity{
        position: relative;
        .l-row-activity-circle{
            width: 14px;
            height: 14px;
            border-radius: 50%;
            display: inline-flex;
            vertical-align: middlie;
            margin-left: 10px;  
        }
        >div{
            position: absolute;
            z-index: 2;
            left: 8px;
            margin:  auto;
            right: 0;
            bottom: 49px;
            transform: scale(1,0) ;
            transform-origin: bottom center;
            opacity: 0;
        }
        &:hover{
            >div{
                transition: .3s cubic-bezier(.46,.03,.52,.96);
                display: block;
                opacity: 1;
                transform: scale(1,1);
                pointer-events: all;
            }
            
        }
    }
    &-sendout{
        .l-row-activity{
            color: var(--purple);
            .l-popOVer-legal{
                display: none;
            }
        }
        .l-row-activity-circle{
            background-color: var(--purple);
        }
    }
    &-placement{
        .l-row-activity{
            color: var(--active);
            >div{
                display: none !important;
            }
        }
        .l-row-activity-circle{
            background-color: var(--active);
            display: none !important;
        }
    }
    
    &-process{
       
        &--green{
            .l-row-activity{
                color: var(--active);
                .l-popOver-More {
                    display: none;
                }
            }
            .l-row-activity-circle{
                background-color: var(--active);
            }
        }
        &--orange{
            .l-row-activity{
                color: var(--orange);
                .l-popOver-More {
                    display: none;
                }
            }
            .l-row-activity-circle{
                background-color: var(--orange);
            }
        }
        &--red{
            .l-row-activity{
                color: var(--red);
                .l-popOver-More {
                    display: none;
                }
            }
            .l-row-activity-circle{
                background-color: var(--red);
            }
           
            border-left: 8px solid var(--red);
            padding: 0 20px 0 12px;
        }
        
    }
  
}
.l-filter{
    &:last-child {
        .l-kick-icon{
            background-image: url('${UserGrey}');
        }
        &:hover{
            .l-kick-icon{
                background-image: url('${User}');
            }
      }
}

`