package main

import "context"

type Togi struct {
	ctx context.Context
}

func TogiApp() *Togi {
	return &Togi{}
}

func (a *Togi) startup(ctx context.Context) {
	a.ctx = ctx
}
