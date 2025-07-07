import { addons } from '@storybook/manager-api';

addons.setConfig({
	sidebar: {
		filters: {
			patterns: (item) => {
				if (item.type === 'docs') return true;

				if (item.type === 'story') return false;

				return true;
			}
		}
	}
});
