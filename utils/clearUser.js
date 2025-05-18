const clearUser = (user) => {
	const { password, ...exUser } = user.toObject()
	return exUser
}

export { clearUser }