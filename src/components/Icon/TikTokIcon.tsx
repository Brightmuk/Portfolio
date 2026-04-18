import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const TikTokIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M101.4 34.5c-7.9 0-14.3-4.5-18.4-10.7V3h-18v81.5c0 10.5-8.5 19-19 19s-19-8.5-19-19 8.5-19 19-19c2.5 0 4.9.5 7 1.4V47.4C48.6 46 43.4 45.2 38 45.2c-21 0-38 17-38 38s17 38 38 38 38-17 38-38V38.1c6.5 5.5 14.8 8.9 24 9.1V34.5h-0.6z"
      fill="currentColor"></path>
  </Icon>
));

export default TikTokIcon;