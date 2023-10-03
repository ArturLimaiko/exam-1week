import React from 'react';


export const Block = () => {
    return <div>
        <VideoHeader />
        <VideoContent />
        <VideoStatistics />
    </div>
}

export const VideoHeader = () => {
    return <div>
        😀 Заголовок видео
    </div>
}

export const VideoContent = () => {
    return <div>
        📼 Контент видео
    </div>
}

export const VideoStatistics = () => {
    return <div>
        📊 Статистика лайков
    </div>
}


export const Components6 = () => {
    return (
        <div>
            <Block/>
        </div>
    );
};