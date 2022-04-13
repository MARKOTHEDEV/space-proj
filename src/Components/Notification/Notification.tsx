
import {
    Notification,NotificationTitle,
} from "./Notification.style"

const PageNotification:React.FC<{
    'title':string,
    "count":string
}> = ({
    count,title
})=>{

    // PICK YOUR DESTINATION

    return (
<Notification>
                    <NotificationTitle>
                        <span>{count}</span>
                        <span>{title}</span>
            </NotificationTitle>

            
            </Notification> 
    )
}

export default PageNotification