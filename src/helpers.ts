import {
  Department,
  DepartmentWithPackageCount,
  PackageCountsByOrganization,
} from "./types";

export const addPackageCountToDepartment = (
  department: Department,
  packageCountsByOrganization: PackageCountsByOrganization
): DepartmentWithPackageCount => {
  return {
    ...department,
    packageCount: packageCountsByOrganization[department.name] || 0,
    subordinates: department.subordinates?.map((department) =>
      addPackageCountToDepartment(department, packageCountsByOrganization)
    ),
  };
};

export const addTotalCountToDepartmentWithPackageCount = (
  departmentWithPackageCount: DepartmentWithPackageCount
) => {
  const totalPackageCount = departmentWithPackageCount.packageCount;

  const subordinatesTotalPackageCount =
    departmentWithPackageCount.subordinates?.reduce(
      (sum, subordinate) => sum + subordinate.packageCount,
      0
    );

  return {
    ...departmentWithPackageCount,
    totalPackageCount: totalPackageCount + (subordinatesTotalPackageCount || 0),
  };
};
