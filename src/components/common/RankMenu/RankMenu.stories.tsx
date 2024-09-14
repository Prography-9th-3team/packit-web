import type { Meta, StoryObj } from '@storybook/react';

import RankMenu from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/RankMenu',
  component: RankMenu,
  tags: ['autodocs'],
  args: { order: 1, title: '', linkIconUrl: '', linkUrl: '' },
  argTypes: {},
} satisfies Meta<typeof Option>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockRank = [
  {
    order: 1,
    title: '[React] 새로운 탭 띄우는 방법',
    linkIconUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAP1BMVEVHcEz/Wkv/Wkr/Wkr/Wkr/Wkr/Wkr/Wkr/Wkr/W0z/Wkr/W0r/Sjf/2Nb/6ef/cmX/VEP/rqj/////yMT/jYMQjqqgAAAADHRSTlMAL4O/5/ld7P8U3TpibdPBAAAAxklEQVR4AWyRgQ7FEAwAC7aywsz/f+vbarHu2SWRxkVygIHSxjpnjVbwz7LiYF1A4gO+CP5xG05ss5utx088y/AtA3f2mUgszNV83yGmXDAlLDnF+0YAioey1xrpqPWgWOteeFOB7rKdW7TfS+tSg0GGWqOxdIcGLHZK6S08dSw4HJwtKeODe8krqEhphWzcMrAcNGzOw3GQlpJISg1KHqxVHlXj+eag9Xn4OWh5f1n5DYgQUYY3svElE3wJDF/SJJyo8WYHAN28FxGg0dDcAAAAAElFTkSuQmCC',
    linkUrl: 'https://developer-talk.tistory.com/862',
  },
  {
    order: 2,
    title: '브런치 - 디자인 컴포넌트를 기능중심적으로 이해해야 하는 이유',
    linkIconUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAOVBMVEUtLDwVEyoiITQoJzgdHDDS0tSPj5Xe3uBmZm8GBCDGxcmfn6S4uLxGRlJ4eID5+fqsrLBFRFE6OkgVuamVAAAAdElEQVR4AdVRtYEDMAy0LQbD//7DZgGpT64UHowfwFxtC5C46wKIKDRNI/bZ/Ysk7I5uSRvtUT8dm3Uuz3bxhs3mJQaNlIe1xMsP9ZaMZtKZ5qVM+LtnznMHVGyEDZ+Uvf8QfX4Myo/3aJcWRkwYHRaO78cHm7kDKBHNsLMAAAAASUVORK5CYII=',
    linkUrl: 'https://brunch.co.kr/@ljhykxx95/7',
  },
  {
    order: 3,
    title: '통합 HR 플랫폼 flex',
    linkIconUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABtElEQVRYhc2Xv0vDQBiGn7QNgj+qjl0EtegkiIMddXAUlzoouhTEf8BRcBQc3NwcHR0EN2c7OJQigoggOLmJuigOxTjcVULIXb4LTeoLR+n17fc+veS+XD1gAOgAHvkqAHyAYs7BYZUK5P/Lw/IKfQwHoO8ARQ3xk+CrAKvAPPAFvPUwn5LFUAZaqDs2PJ6BiR4A+DaAckxwdFSzBGgLAF5C/lHgCGgCN8AJyatkBKgIwgOgpv07Fs9hGoANQfiF9q4JvHuuANuCogva2xF4A1eAqrBgTRgeAFtxAKZG9ITaaiZ96NdZiyeqmbhJWydcjrxvAkuoZ8e4nnt3ADB6bY1oGtX16qG5OaABDGkY6SWYjKlv7QNRLaKWvlvwQM+fCsKvDTXFACuGwl3dW8JfLXXFAKbityHPPvAd+fw4oa4IYNcCEACPwHDIP4h6jkgkAjhLAOiOc2BMGPwHIDmQSM+M68CUI4DoRNRyqNd2BYDkS+AjuwSXKbLFu6AhAPCzBADYNAQ/ACMpwgF8TwN0HL5UR7XjT+AKuEsZDo4rkIVE2zBT/QsA03EpDwUl1I3g0ae/57+C69PRgcngaQAAAABJRU5ErkJggg==',
    linkUrl: 'https://flex.team',
  },
  {
    order: 4,
    title: '네이버 - NAVER',
    linkIconUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEUD5mQD4GICyV0C0VwCwWED7WYDtmUDtWUD7mYDtGYDu2MC2V////9Y2YTh+uw5y3g54Hj+//+v7caf6bvvPHmAAAAACnRSTlP+////////5SsrBVeYDAAAAL5JREFUKJGNkAkSgyAMRUOgLmyK3v+uzYJtcWH6IoT5DxgHmOD1AEzw6MiyvPXA9QfmVEfcoS+D0VqJYEzgbmoGQUmxxLLSItMi1fArYyxZZDxLyzKW3VqRVkOwisgY1yqVk8yPstDYWolSLPNWd6QaAk38Jf5ZzHp5Qk0BFTmJy0cKrcS9lQ6p3CH14oSS0knn2PLzZVouhZ/PKVC7W4jf3kjvrgCnvpn8ZyP4Dn05DH7QcQXG21gYYX604/wGTF0TzKgJYlsAAAAASUVORK5CYII=',
    linkUrl: 'https://www.naver.com/',
  },
  {
    order: 5,
    title: '쉽고 빠르고 합리적인 AI Store | 달파 - DALPHA',
    linkIconUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAA4klEQVR4AWJwL/ChKx5hFv6KBVBTBycQg0AUhstIE1OBVwuxA6uYOizAHizBm3VsC7uzYOAxiOzIKuTwXzTJR0R1dKfGL5i77v4BviEH4xnnVC8p4fOrIMF40tAE9xawQEHyPca5Xu3ACE6/gBpv8IGg5vWzcYDnbeBk6YMFZCkZNsRwgx05h+ov4wmQAawKnG4E7pERdPiX2zYN3kwrYH0SSKfBCO+2EyDeOrwV/AJ6ObeAuJQQbwFl3uMxwgO/ChYpqbJGoALfsoHGYDXsYDMgBaFVkCQ3iaTrswFvJo5aCACiiDy9KESPGQAAAABJRU5ErkJggg==',
    linkUrl: 'https://dalpha.so/ko',
  },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: () => {
    return (
      <div className='w-[260px] p-12 flex flex-col gap-4'>
        {mockRank.map(({ order, title, linkIconUrl, linkUrl }) => {
          return (
            <RankMenu
              key={order + title}
              order={order}
              title={title}
              linkIconUrl={linkIconUrl}
              linkUrl={linkUrl}
            />
          );
        })}
      </div>
    );
  },
};
