export const defaultby = config => {
  const val = config;
  if (!val.echartsYLeft) val.echartsYLeft = [];
  if (!val.echartsYRight) val.echartsYRight = [];
  if (!val.echartsLegendNotSelected) val.echartsLegendNotSelected = [];

  if (!val.echartsSeriesSymbolRotate) val.echartsSeriesSymbolRotate = 0;
  if (!val.echartsSeriesSymbolRotate2) val.echartsSeriesSymbolRotate2 = 0;
  if (!val.echartsSeriesSymbolOffsetHorizontal)
    val.echartsSeriesSymbolOffsetHorizontal = 0;
  if (!val.echartsSeriesSymbolOffsetHorizontal2)
    val.echartsSeriesSymbolOffsetHorizontal2 = 0;
  if (!val.echartsSeriesSymbolOffsetVertical)
    val.echartsSeriesSymbolOffsetVertical = 0;
  if (!val.echartsSeriesSymbolOffsetVertical2)
    val.echartsSeriesSymbolOffsetVertical2 = 0;
  if (!val.echartsSeriesStep) val.echartsSeriesStep = false;
  if (!val.echartsSeriesStep2) val.echartsSeriesStep2 = false;
  if (!val.echartsSeriesAreaStyleOpacity) val.echartsSeriesAreaStyleOpacity = 0;
  if (!val.echartsSeriesAreaStyleOpacity2)
    val.echartsSeriesAreaStyleOpacity2 = 0;
  if (!val.echartsSeriesStack) val.echartsSeriesStack = false;
  if (!val.echartsSeriesStack2) val.echartsSeriesStack2 = false;
  if (!val.echartsSeriesSmooth) val.echartsSeriesSmooth = false;
  if (!val.echartsSeriesSmooth2) val.echartsSeriesSmooth2 = false;
  if (!val.echartsSeriesConnectNulls) val.echartsSeriesConnectNulls = false;
  if (!val.echartsSeriesConnectNulls2) val.echartsSeriesConnectNulls2 = false;

  if (!val.echartsXAxisName) val.echartsXAxisName = '';
  if (!val.echartsXAxisNameRotate) val.echartsXAxisNameRotate = 0;
  if (!val.echartsXAxisLabelRotate) val.echartsXAxisLabelRotate = 0;
  if (!val.echartsXAxisInverse) val.echartsXAxisInverse = false;
  if (!val.echartsXAxisDataFormat) val.echartsXAxisDataFormat = false;

  if (!val.echartsYAxisName) val.echartsYAxisName = '';
  if (!val.echartsYAxisName2) val.echartsYAxisName2 = '';
  if (!val.echartsYAxisNameRotate) val.echartsYAxisNameRotate = '';
  if (!val.echartsYAxisNameRotate2) val.echartsYAxisNameRotate2 = '';
  if (!val.echartsYAxisLabelRotate) val.echartsYAxisLabelRotate = '';
  if (!val.echartsYAxisLabelRotate2) val.echartsYAxisLabelRotate2 = '';
  if (!val.echartsYAxisInverse) val.echartsYAxisInverse = '';
  if (!val.echartsYAxisInverse2) val.echartsYAxisInverse2 = '';

  if (!val.echartsTooltipFormatter) val.echartsTooltipFormatter = '';
  if (!val.echartsTooltipBorderWidth) val.echartsTooltipBorderWidth = 0;

  if (!val.echartsToolboxFeatureMagicTypeShow)
    val.echartsToolboxFeatureMagicTypeShow = false;
  if (!val.echartsToolboxFeatureDataZoomShow)
    val.echartsToolboxFeatureDataZoomShow = false;
  if (!val.echartsToolboxFeatureRestoreShow)
    val.echartsToolboxFeatureRestoreShow = false;
  return val;
};
