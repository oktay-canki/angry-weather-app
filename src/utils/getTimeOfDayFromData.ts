import TimeOfDay from "@/enums/TimeOfDay";

function getTimeOfDayFromData(iconCode: string): TimeOfDay {
  return iconCode.split("").includes("d") ? TimeOfDay.DAY : TimeOfDay.NIGHT;
}

export default getTimeOfDayFromData;
