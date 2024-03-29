import { Box, Link } from '@mui/material';
import { CheckProps } from '../../types/ui/check-layout-props';

export const checkVariantOfTag = (item: CheckProps) => {
	return item.href && item.value !== 'N/A' ? (
		<Link sx={item.sx} href={item.href as string}>
			{item.value}
		</Link>
	) : (
		<Box component={item.component ? item.component : Box} sx={item.sx}>
			{item.value}
		</Box>
	);
};
