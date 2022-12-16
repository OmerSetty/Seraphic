import { CustomDivider } from '../shared-components/CustomComponents';
import { ActiveLabel, InactiveLabel } from './ActivityLabels';
import { Distribution } from './Distribution';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CustomIconButton } from '../shared-components/CustomComponents';
import '../../css/SortBy.css';
import $ from "jquery";

type Props = {
  headline: string;
  statusData: { [key: string]: any };
}

export function Status({ headline, statusData }: Props): JSX.Element {
  function setSelectWidth() {
    let sel = $('#sel') as any;
    $('#templateOption').text(sel.val());
    sel.width($('#template').width());
  }
  setSelectWidth();

  $('#sel').on('input', function () {
    setSelectWidth();
  });

  return (
    <>
      <CustomDivider />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant='basicHeadline' sx={{
            color: 'primary.headers',
          }}>
            {headline}
          </Typography>
        </Box>
        <Box>
          <Typography variant='listKey' sx={{ color: 'primary.listKeys', mr: '0.25em' }}>
            Sort By
          </Typography>
          <select id="template" style={{ display: 'none' }}>
            <option id="templateOption"></option>
          </select>
          <select id="sel">
            {statusData && statusData['Sorting Options'].map((sortOption: string, index: number) => (
              <option key={index}>{sortOption}</option>
            ))}
          </select>
          <CustomIconButton aria-label="redirect-icon">
            <img src='icons/redirect.png' alt='redirect-icon' />
          </CustomIconButton>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '1em' }}>
        <Box>
          {statusData && (
            <Typography variant='percentage' sx={{ color: 'primary.headers' }}>
              {statusData.Percentage}%
            </Typography>
          )}
        </Box>
        <Box>
          <ActiveLabel margin={'8px'} />
          <InactiveLabel />
        </Box>
      </Box>
      {statusData &&
        <Distribution distributionData={statusData.Distribution} distributionJumps={statusData['Distribution Jumps']} />
      }
    </>
  )
}