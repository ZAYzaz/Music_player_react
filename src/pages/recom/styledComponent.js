
import styled from 'styled-components'
//import config from '@as/stylesheets/config'

export const TopListWrapper = styled.ul`
    width: 100%;
    height:100%; 
    padding:10px;
    background: rgb(244,244,244);
`

 
export const TopListLi = styled.li`
    margin-bottom: 10px;
    overflow: hidden;
    background: #fff;
`
export const TopicMain = styled.div`
    display:flex;
    background: #fff;

`

export const HotClassifyWrapper = styled.section`
    width: 100%;
    background: #fff; 
`

export const HotClassifyTitle = styled.section`
    width: 100%;
    padding: 12px;
    font-size: 14px;
    color: rgb(156,156,156);
    
`
export const HotClassifyContent = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
`
export const HotClassifyItem = styled.li`
    width: 25%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-top: 1px solid #f5f5f5;
    border-left: 1px solid #f5f5f5;
    color: #333;
`
//RecomItem

export const RecomItemContainer = styled.div`
    padding-right:10px;
    width:100%;
    height:264px;
     
    p{2
        padding-left:10px;
        height:35px;
        line-height:35px;
    }
`
export const RecomItemUl = styled.ul`
    margin-left:10px;
    width:100%;
    height:219px; 
    display:flex;
    flex-wrap:wrap; 
`
export const RecomItemLi = styled.li`
     
    width:173px;
    margin-right:8px;
    height:220px;
    background:white;
    position:relative;
    img{
        width:100%;
    }
    span{
        position:absolute;
        bottom: 50px;
        right: 5px;
        font-size: 24px;

    }
    div{
       padding:8px 0 0 9px;
    }
`
 



