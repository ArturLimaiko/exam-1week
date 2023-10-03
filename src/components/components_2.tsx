import React from 'react';


//
// Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?
//
//  Ответ дайте через пробел, пример: a={12} ccc={video.id} d={'hello'}
//


//Компонент VideoHeader отображает название видео, переданное через пропс videoName.
export const VideoHeader = (props: { videoName: string }) => {
    return <div>
        😀 {props.videoName}
    </div>
}

//Компонент VideoContent отображает ссылку на видео, переданную через пропс videoContent  а также саму ссылку в виде ссылки-ярлыка
export const VideoContent = (props: { videoContent: string }) => {
    return <div>
        📼 <a href={props.videoContent}>{props.videoContent}</a>
    </div>
}


//Компонент VideoDescription отображает описание видео, переданное через пропс videoDescription.
export const VideoDescription = (props: { videoDescription: string }) => {
    return <div>
        📑 {props.videoDescription}
    </div>
}

export const VideoId = (props: { VideoId: number }) => {
    return <div>
        <span>
            ID:
            {props.VideoId}
            </span>
    </div>
}


//Компонент YoutubeVideo объединяет все три компонента в один блок, принимая объект video через пропс video.
// Объект video содержит информацию о видео, включая его название, ссылку и описание.
export const YoutubeVideo = (props: any) => {
    return <div>
        <VideoHeader videoName={props.video.title}/>
        <VideoContent videoContent={props.video.link}/>
        <VideoDescription videoDescription={props.video.description}/>
        <VideoId VideoId={props.video.id}/>
    </div>
}


// Компонент Components2 отображает компонент YoutubeVideo, передавая ему объект video через пропс video.//
// В результате на странице будет отображаться блок с информацией о видео на YouTube, включая его название, ссылку и описание.
export const Components2 = () => {
    const video = {
        title: 'Samurai way',
        link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
        description: 'Best free react-course',
        id: 123121412
    }

    return <YoutubeVideo video={video}/>
};


