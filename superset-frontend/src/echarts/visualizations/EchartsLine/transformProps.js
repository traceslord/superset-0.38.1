export default function transformProps(chartProps) {
  const { width, height, formData, datasource, queryData } = chartProps;
  return {
    width,
    height,
    config: formData,
    label: datasource.verboseMap,
    data: queryData.data,
  };
}
